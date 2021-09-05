/**
 * Created by Terence on 2021/9/4 - 4:17 下午
 * Description :
 */

for (let i of [1,2,3]) {
  console.log(i)
}

function createElement(tagName, attributes, ...children) {
  let e = document.createElement(tagName);

  for (let key in attributes) {
    e.setAttribute(key, attributes[key]);
  }

  for (let child of children) {
    if (typeof child === 'string') {
      child = document.createTextNode(child);
    }
    e.appendChild(child);
  }

  return e;
}


document.body.appendChild(<div id="a" className="aa">
  <div>abc</div>
  <div></div>
  <div></div>
</div>)
