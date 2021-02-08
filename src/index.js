// import * as _ from "lodash";
import "./style.css";
import Icon from "./icon.png";
import { cube } from "./test";

function component() {
  var btn = document.createElement("button");
  btn.innerHTML = "Click me and check the console!";
//   btn.onclick = testFun;

  const element = document.createElement("div");
  //   element.innerHTML = "111cxm333";
  element.innerHTML = ["Hello webpack!", "5 cubed is equal to " + cube(5)].join(
    "\n\n"
  );
  element.classList.add("hello");

  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  element.appendChild(btn);
  return element;
}
const element = component();
document.body.appendChild(element);

// if (module.hot) {
//     module.hot.accept('./test.js', function () {
//         console.log('Accepting the updated printMe module!');
//         testFun();
//         document.body.removeChild(element);
//         const element = component()
//         document.body.appendChild(element);
//     })
// }
