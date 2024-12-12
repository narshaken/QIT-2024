const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function() {
    alert("Button clicked");
    myButton.textContent = "hello world";
    myButton.style.fontFamily = 'cursive';
});

myButton.addEventListener("mouseenter", function() {
    myButton.style.fontWeight = 'bold';
});

myButton.addEventListener("mouseleave", function() {
    myButton.style.fontWeight = 'normal';
});

const test = document.querySelector("#test");
test.addEventListener("click", function() {
    test.style.fontSize = "50px"
});

test.addEventListener("dblclick", function() {
    test.style.fontSize = "26px"
    test.style.color = "purple"
});

let size = 25;
const fred = document.getElementById("fred");
fred.style.fontSize = size + 'px';
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

plus.addEventListener("click", function() {
    fred.style.fontSize = '30px';
});

minus.addEventListener('click', function() {
    fred.style.fontSize = '10px'
});
