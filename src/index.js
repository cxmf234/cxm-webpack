import css from "./style.css";

console.log(css);
let div = document.createElement("div");
div.className = "rect";
div.innerText = "hello div";
div.classList.add('rect');

let body = document.getElementsByTagName("body")[0];

body.appendChild(div);
