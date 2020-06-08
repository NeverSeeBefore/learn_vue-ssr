const list = ["百度", "淘宝", "天猫"];
function createEle(name) {
  return document.createElement(name);
}
var ul = createEle("ul");

list.forEach((item) => {
  const li = createEle("li");
  li.innerText = item;
  ul.appendChild(li);
});
document.body.appendChild(ul);
