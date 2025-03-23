console.log("=====getElementById() DOM API ======");

 

const reactElement = document.getElementById("react");

console.log(reactElement);

console.log(reactElement.innerText);

 

console.log("=====querySelector() DOM API using element name ======");

const h2Element = document.querySelector("h2");

console.log(h2Element.innerText);
console.log("=====querySelector() DOM API using element id ======");

const javaElement = document.querySelector("#java");

console.log(javaElement.innerText);

console.log("=====querySelector() DOM API using element class ======");

const toolElement = document.querySelector(".tools");

console.log(toolElement.innerText);

console.log("=====querySelectorAll() DOM API using element class ======");

const toolsElement = document.querySelectorAll(".tools");

for (const element of toolsElement) {

    console.log(element.innerText);  

}
console.log(`====== Updating Element text =========`);

let toolsHeading = document.querySelector("#toolsHeading");

toolsHeading.innerText = "Tools and IDE's";