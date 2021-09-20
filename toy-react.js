/**
 * Created by Terence on 2021/9/5 - 9:04 下午
 * Description :
 */
const RENDER_TO_DOM = Symbol('render to dom')

// 1. elementwrapper -> get vdom
// 2. elementwrapper -> get vdom

function replaceContent(range, node) {
  // 先插入node, 将range设为当前node后面, 删除后面range, 重新设置range范围.
  range.insertNode(node);
  range.setStartAfter(node); // 先放在当前range之后, 否则会有range合并的问题.
  range.deleteContents();

  range.setStartBefore(node);
  range.setEndAfter(node);
}

export class Component {
  constructor () {
    this.props = Object.create(null);
    this.children = [];
    this._root = null;
    this._range = null;
    this._vdom = null;
  }
  setAttribute (name, value) {
    this.props[name] = value;
  }
  appendChild (component) {
    this.children.push(component)
  }
  get vdom () {
    console.log('02-1 渲染自定义组件. 通过render获取vdom, this.render()返回ElementWrapper的this, 包含虚拟dom, , this挂载了_type, _children, _props, _vdom, [RENDER_TO_DOM]方法');
    return this.render().vdom;
  }
  // get vchildren () {
  //   return this.children.map(child => child.vdom); // ???
  // }
  [RENDER_TO_DOM] (range) {
    console.log('02-0 进入根节点组件RENDER_TO_DOM, 准备获取_vdom');
    this._range = range;
    this._vdom = this.vdom;
    // this.render()[RENDER_TO_DOM](range); // this.render()得到createElement包着的的ElementWrapper -> 再让ElementWrapper去渲染出节点.
    console.log('this._vdom===', this._vdom)

    console.log('02-1 准备渲染this._vdom[RENDER_TO_DOM](range), 调用返回ElementWrapper的RENDER_TO_DOM, 递归渲染');
    this._vdom[RENDER_TO_DOM](range); // this.render()得到createElement包着的的ElementWrapper -> 再让ElementWrapper去渲染出节点.
  }
/*  rerender () {
    let oldRange = this._range; // 保存oldRage

    let range = document.createRange(); // 新range放在老range子内容第一个. 渲染新range
    range.setStart(oldRange.startContainer, oldRange.startOffset);
    range.setEnd(oldRange.startContainer, oldRange.startOffset);
    this[RENDER_TO_DOM](range)

    oldRange.setStart(range.endContainer, range.endOffset) // 将老range内容放在新range内容之后.
    oldRange.deleteContents(); // 删除所有内容
  }*/
  update() {
    let isSameNode = (oldNode, newNode) => {
      if (oldNode.type !== newNode.type) {
        return false;
      }

      for (let name in newNode.props) {
        if (newNode.props[name] !== oldNode.props[name]) {
          return false;
        }
      }

      if (Object.keys(oldNode.props).length > Object.keys(newNode.props).length) {
        return false;
      }

      if (newNode.type === '#text') {
        if (newNode.content !== oldNode.content) {
          return false;
        }
      }

      return true;
    }

    let update = (oldNode, newNode) => {
      // 对比type, props, children
      // #text content
      if (!isSameNode(oldNode, newNode)) {
        newNode[RENDER_TO_DOM](oldNode._range);
        return;
      }

      newNode._range = oldNode._range;

      let newChildren = newNode.vchildren;
      let oldChildren = oldNode.vchildren;

      if (!newChildren || !newChildren.length) {
        return;
      }

      let tailRange = oldChildren[oldChildren.length - 1]._range;

      for (let i = 0; i < newChildren.length; i++) {
        let newChild = newChildren[i];
        let oldChild = oldChildren[i];
        if (i < oldChildren.length) {
          update(oldChild, newChild);
        } else {
          let range = document.createRange();
          range.setStart(tailRange.endContainer, tailRange.endOffset);
          range.setEnd(tailRange.endContainer, tailRange.endOffset);
          newChild[RENDER_TO_DOM](range); // 新节点渲染至最后一个节点后.
          tailRange = range;
        }
      }
    }

    let vdom = this.vdom;
    update(this._vdom, vdom);
    this._vdom = vdom;
  }
  setState (newState) {
    if (newState === null || typeof this.state !== 'object') {
      this.state = newState;
      this.update();
      return;
    }
    let merge = (oldState, newState) => {
      for(let p in newState) {
        if (oldState[p] === null || typeof oldState[p] !== 'object') {
          oldState[p] = newState[p];
        } else {
          merge(oldState[p], newState[p]);
        }
      }
    }
    merge(this.state, newState);
    this.update();
  }
}

class ElementWrapper extends Component {
  constructor (type) {
    super(type);
    this.type = type;
  }
  get vdom () {
    this.vchildren = this.children.map(child => child.vdom);
    return this;
    /*{
      type: this.type,
      props: this.props,
      children: this.children.map(child => child.vdom)
    }*/
  }
/*  setAttribute (name, value) {
    if (name.match(/^on([\s\S]+)/)) {
      this.root.addEventListener(RegExp.$1.replace(/^[\s\S]/, c => c.toLowerCase()), value)
    } else {
      if (name === 'className') {
        this.root.setAttribute('class', value);
      } else {
        this.root.setAttribute(name, value);
      }
    }
  }*/
/*  appendChild (component) {
    let range = document.createRange();
    range.setStart(this.root, this.root.childNodes.length);
    range.setEnd(this.root, this.root.childNodes.length);
    component[RENDER_TO_DOM](range);
  }*/
  [RENDER_TO_DOM] (range) {
    debugger;
    this._range = range;
    // range.deleteContents();

    let root = document.createElement(this.type); // 仍然是实dom, 不过目前已经有了dom树, 为dom diff做铺垫.

    // setAttribute 逻辑
    for (let name in this.props) {
      let value = this.props[name];
      if (name.match(/^on([\s\S]+)/)) {
        root.addEventListener(RegExp.$1.replace(/^[\s\S]/, c => c.toLowerCase()), value)
      } else {
        if (name === 'className') {
          root.setAttribute('class', value);
        } else {
          root.setAttribute(name, value);
        }
      }
    }

    if (!this.vchildren)
      this.vchildren = this.children.map(child => child.vdom);

    // appendChild逻辑
    for (let child of this.vchildren) {
      let chilRrange = document.createRange();
      chilRrange.setStart(root, root.childNodes.length);
      chilRrange.setEnd(root, root.childNodes.length);
      child[RENDER_TO_DOM](chilRrange); // 递归渲染child, 直至渲染为TextWrapper.
    }

    // range.insertNode(root);
    replaceContent(range, root);
  }
}

class TextWrapper extends Component  {
  constructor (content) {
    super(content);
    this.type = '#text';
    this.content = content;
  }
  get vdom () {
    return this;
    /*{
      type: '#text',
      content: this.content,
    }*/
  }
  [RENDER_TO_DOM] (range) {
    this._range = range;
    // range.deleteContents();
    // range.insertNode(this.root);

    let root = document.createTextNode(this.content);
    replaceContent(range, root);
  }
}

// 1. 将自定义组件初始化, 生成虚拟dom树 --> render方法去渲染.
export function createElement(type, attributes, ...children) {
  console.log('02-2 被调用render方法, 执行至自定义createElement, 也有可能是最初始的根节点Game在第执行0步操作.');
  console.log('attributes', attributes)
  let e;

  if (typeof type === 'string') {
    e = new ElementWrapper(type)
  } else {
    // 自定义组件
    e = new type
  }

  for (let key in attributes) {
    e.setAttribute(key, attributes[key]);
  }

  const insertChildren = (children) => {
    for (let child of children) {
      if (typeof child === 'string') {
        child = new TextWrapper(child);
      }

      if (child === null) {
        continue;
      }

      if (typeof child === 'object' && child instanceof Array) {
        insertChildren(child);
      } else {
        e.appendChild(child);
      }
    }
  }

  insertChildren(children);
  return e;
}

export const render = (component, parentElement) => {
  let range = document.createRange();
  range.setStart(parentElement, 0);
  range.setEnd(parentElement, parentElement.childNodes.length);
  range.deleteContents();
  console.log('01-渲染根节点自定义组件');
  component[RENDER_TO_DOM](range); // --> 2. 初始点!!!渲染节点 ->
}
