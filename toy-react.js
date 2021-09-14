/**
 * Created by Terence on 2021/9/5 - 9:04 下午
 * Description :
 */
const RENDER_TO_DOM = Symbol('render to dom')

class ElementWrapper {
  constructor (type) {
    this.root = document.createElement(type);
  }
  setAttribute (name, value) {
    if (name.match(/^on([\s\S]+)/)) {
      this.root.addEventListener(RegExp.$1.replace(/^[\s\S]/, c => c.toLowerCase()), value)
    } else {
      if (name === 'className') {
        this.root.setAttribute('class', value);
      } else {
        this.root.setAttribute(name, value);
      }
    }
  }
  appendChild (component) {
    let range = document.createRange();
    range.setStart(this.root, this.root.childNodes.length);
    range.setEnd(this.root, this.root.childNodes.length);
    component[RENDER_TO_DOM](range);
  }
  [RENDER_TO_DOM] (range) {
    range.deleteContents();
    range.insertNode(this.root);
  }
}

class TextWrapper {
  constructor (content) {
    this.root = document.createTextNode(content);
  }
  [RENDER_TO_DOM] (range) {
    range.deleteContents();
    range.insertNode(this.root);
  }
}

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
  component[RENDER_TO_DOM](range); // --> 渲染节点
}
