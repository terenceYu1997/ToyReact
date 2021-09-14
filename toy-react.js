/**
 * Created by Terence on 2021/9/5 - 9:04 下午
 * Description :
 */
const RENDER_TO_DOM = Symbol('render to dom')

// 1. elementwrapper -> get vdom
// 2. elementwrapper -> get vdom

export class Component {
  constructor () {
    this.props = Object.create(null);
    this.children = [];
    this._root = null;
    this._range = null;
  }
  setAttribute (name, value) {
    this.props[name] = value;
  }
  appendChild (component) {
    this.children.push(component)
  }
  get vdom () {
    return this.render().vdom;
  }
  // get vchildren () {
  //   return this.children.map(child => child.vdom); // ???
  // }
  [RENDER_TO_DOM] (range) {
    this._range = range;
    this.render()[RENDER_TO_DOM](range); // this.render()得到ElementWrapper -> 再让ElementWrapper去渲染出节点.
  }
  rerender () {
    let oldRange = this._range; // 保存oldRage

    let range = document.createRange(); // 新range放在老range子内容第一个. 渲染新range
    range.setStart(oldRange.startContainer, oldRange.startOffset);
    range.setEnd(oldRange.startContainer, oldRange.startOffset);
    this[RENDER_TO_DOM](range)

    oldRange.setStart(range.endContainer, range.endOffset) // 将老range内容放在新range内容之后.
    oldRange.deleteContents(); // 删除所有内容
  }
  setState (newState) {
    if (newState === null || typeof this.state !== 'object') {
      this.state = newState;
      this.rerender();
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
    this.rerender();
  }
}

class ElementWrapper extends Component {
  constructor (type) {
    super(type);
    this.type = type;
  }
  get vdom () {
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
    range.deleteContents();

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

    // appendChild逻辑
    for (let child of this.children) {
      let chilRrange = document.createRange();
      chilRrange.setStart(root, root.childNodes.length);
      chilRrange.setEnd(root, root.childNodes.length);
      child[RENDER_TO_DOM](chilRrange); // 递归渲染child, 直至渲染为TextWrapper.
    }

    range.insertNode(root);
  }
}

class TextWrapper extends Component  {
  constructor (content) {
    super(content);
    this.type = '#text';
    this.content = content;
    this.root = document.createTextNode(content);
  }
  get vdom () {
    return this;
    /*{
      type: '#text',
      content: this.content,
    }*/
  }
  [RENDER_TO_DOM] (range) {
    range.deleteContents();
    range.insertNode(this.root);
  }
}

// 1. 将自定义组件初始化, 生成虚拟dom树 --> render方法去渲染.
export function createElement(type, attributes, ...children) {
  let e;

  if (typeof type === 'string') {
    e = new ElementWrapper(type)
  } else {
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
  component[RENDER_TO_DOM](range); // --> 2. 初始点!!!渲染节点 ->
}
