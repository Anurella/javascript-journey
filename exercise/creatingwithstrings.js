console.log('It works');

// creating html elements via string

const stringHtml = `
  <div class="wrapper">
  <h2> This was created in JS </h2>
  <img src = "https://picsum.photos/500"
  alt = "Cute Pup">
  </div>
`;

const girl = document.querySelector('.purple');
girl.innerHTML = stringHtml;

// convert string to DOM element
const myFragment = document.createRange().createContextualFragment(stringHtml);

document.body.appendChild(myFragment);

/* //security and sanitization of strings (XSS cross site scripting ) */
// do not allow for external inout to be able to run javascript

// traversing nodes
const anurella = document.querySelector('.anurella');
console.log(anurella);

console.group('Traversing Nodes');
console.log(`First Child`, anurella.firstElementChild);
console.log(`Last Child`, anurella.lastElementChild);
console.log(`Sibling that comes before`, anurella.previousElementSibling);
console.log(`Sibling that comes after`, anurella.nextElementSibling);
console.log(`Element's Parent`, anurella.parentElement);
console.log(`Not sure`, anurella.nextSibling);
console.groupEnd();