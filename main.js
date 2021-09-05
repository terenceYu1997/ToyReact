/**
 * Created by Terence on 2021/9/4 - 4:17 下午
 * Description :
 */
import { createElement, render, Component } from './toy-react';

class MyComponent extends Component {
  render () {
    return (
      <div>
        <h1>my component</h1>
        {this.children}
      </div>
    )
  }
}


render(<MyComponent id="a" className="aa">
  <div>abc</div>
  <div></div>
  <div></div>
</MyComponent>, document.body)


// 1. 抽离toy-react.js
// 2.
// 3.
// 4.
