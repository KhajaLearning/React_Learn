//Create html using normal JS 24-12-2023
const rootElement = document.getElementById("root");
const element = document.createElement("div");
element.textContent = "Hello World";
element.className = "container";
rootElement.appendChild(element);

const headElement = document.createElement("h1");
headElement.textContent = "head h1 element";
element.appendChild(headElement);
//Create html using normal JS 24-12-2023

//Create html DOM from virtual DOM using react 25-12-2023