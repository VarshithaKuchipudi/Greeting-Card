let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Varshitha","to":"Pranathi"}';
let parsedText = JSON.parse(greeting);
let greetValues1 = document.getElementById("greet");
greetValues1.textContent = "From: " + parsedText.from;


greetValues1.classList.add("greet", "d-flex", "flex-row", "justify-content-end");

let greetValues = document.getElementById("greet1");
greetValues.textContent = "To: " + parsedText.to;
greetValues.classList.add("greet", "d-flex", "flex-row", "justify-content-end");


let greetTextEl = document.getElementById("greetText");
greetTextEl.textContent = parsedText.greetText;
greetTextEl.classList.add("greet-text-container", "greet-text");
