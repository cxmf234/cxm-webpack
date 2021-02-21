import _ from "lodash";
// import Print from "./print";

function component() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Looks like we are in development mode!!");
  }

  console.log(_.join(["Another", "module", "loaded!"], " "));

  var btn = document.createElement("button");
  btn.innerHTML = "Click me and check the console!";
//   btn.onclick = Print.bind(null, "Hello webpack!");

  const element = document.createElement("div");
  element.classList.add("hello");

  element.appendChild(btn);
  return element;
}
const element = component();
document.body.appendChild(element);
