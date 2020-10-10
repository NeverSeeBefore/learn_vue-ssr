
const list = ["百度", "淘宝", "京东"];


function createEle(name) {
  return document.createElement(name)
}

const ul = createEle('ul');
list.forEach(item => {
  const li = createEle('li');
  li.innerText = item;
  ul.appendChild(li);
})

document.body.appendChild(ul);