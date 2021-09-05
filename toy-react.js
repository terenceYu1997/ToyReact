/**
 * Created by Terence on 2021/9/5 - 9:04 下午
 * Description :
 */
class ElementWrapper {
  constructor (type) {
    this.root = document.createElement(type);
  }
  setAttribute (name, value) {
    this.root.setAttribute(name, value);
  }
  appendChild (component) {
    this.root.appendChild(component.root);
  }
}

class TextWrapper {
  constructor (content) {
    this.root = document.createTextNode(content);
  }
}

export class Component {
  constructor () {
    this.props = Object.create(null);
    this.children = [];
    this._root = null;
  }
  setAttribute (name, value) {
    this.props[name] = value;
  }
  appendChild (component) {
    this.children.push(component)
  }
  get root () {
    if (!this._root) {
      console.log('this.render', this.render);
      console.log('this.render().root', this.render().root);
      this._root = this.render().root;
    }
    return this._root;
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
  parentElement.appendChild(component.root);
}
