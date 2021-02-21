function component() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Looks like we are in development mode!!");
  }
  var btn = document.createElement("button");
  btn.innerHTML = "Click me and check the console!";

  const element = document.createElement("div");
  element.classList.add("hello");

  element.appendChild(btn);
  return element;
}
const element = component();
document.body.appendChild(element);
