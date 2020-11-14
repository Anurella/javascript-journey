console.log('It works');
// Make a div
const myDiv = document.createElement('div');
// add a class of wrapper to it
myDiv.classList.add('wrapper');
// put it into the body
document.body.appendChild(myDiv);
// make an unordered list
const list = document.createElement('ul');
// add three list items with the words "one, two three" in them
const listItem = `
        <li> One </li>
        <li> Two </li>
        <li> Three </li>
`;
list.innerHTML = listItem;
// put that list into the above wrapper
myDiv.appendChild(list);
// create an image
const myImg = document.createElement('img');
// set the source to an image
myImg.src =
  'https://www.google.com/logos/doodles/2019/afifa-iskanders-98th-birthday-5285854795792384.3-s.png';
// set the width to 250
myImg.width = `200`;
// add a class of cute
myImg.classList.add('cute');
// add an alt of Cute Puppy
myImg.alt = 'Cute Puppy';
// Append that image to the wrapper
myDiv.insertAdjacentElement('beforeend', myImg);
// with HTML string, make a div, with two paragraphs inside of it
const para = `
<div class="firstDiv">
<p></p>
<p> Warning Div </p>
</div>
`;
// put this div before the unordered list from above
list.insertAdjacentHTML('beforebegin', para);

// add a class to the second paragraph called warning
const paraAll = document.querySelector('.firstDiv');
paraAll.children[1].classList.add('warning');

// remove the first paragraph
paraAll.firstElementChild.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  return `
     <div class = "playerCard" >
     <h2>${name} — ${age}</h2>
     <p>They are ${height} and ${age} years old. In Dog years this person would be ${age *
    7}INDOGYEARS. That would be a tall dog!</p>
     <button class="delete" type="button"> Click Me </button>
     </div>
    `;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cardDiv = document.createElement('div');
cardDiv.classList.add('cards');
// Have that function make 4 cards
const card1 = generatePlayerCard('Amaka', 25, 5);
const card2 = generatePlayerCard('ByeGirl', 25, 77);
const card3 = generatePlayerCard('ByeBoy', 25, 62);
const card4 = generatePlayerCard('GirlBoy', 25, 45);

// append those cards to the div
const cardOne = document.createRange().createContextualFragment(card1);
const cardTwo = document.createRange().createContextualFragment(card2);
const cardThree = document.createRange().createContextualFragment(card3);
const cardFour = document.createRange().createContextualFragment(card4);

cardDiv.append(cardOne, cardTwo, cardThree, cardFour);
// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('beforebegin', cardDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

const btnPar = document.querySelectorAll('.delete');

// select all the buttons!
const btns = document.querySelectorAll('.delete');
// make out delete function
function delBtn(e) {
  const btnRemove = e.currentTarget;
  btnRemove.closest('.playerCard').remove();
}

btns.forEach(btn => btn.addEventListener('click', delBtn));
