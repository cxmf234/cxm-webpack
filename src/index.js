import css from "./style.css";
import { join } from "lodash";

console.log(css);
let div = document.createElement("div");
div.className = "rect";
div.innerText = "hello div";
div.classList.add("rect");
join("ss");

let body = document.getElementsByTagName("body")[0];

body.appendChild(div);
