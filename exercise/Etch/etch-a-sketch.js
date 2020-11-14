console.log('IT WORKS');
// select the elements on the page - canvas , shake button

// canvas has a method context that lets us draw programmatically
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 25;

// setup our canvas for drawing
// make two variables from the same properties on the canvas

const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

ctx.beginPath(); // start the drawing
ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50% )`;
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// draw function
// using options object to pass more than one param
// { objevt destructuring }
function draw({ key }) {
  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50% )`;
  console.log(key);
  ctx.beginPath();
  ctx.moveTo(x, y);
  // move our x and y values depending on what the user selects
  switch (key) {
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;

    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;

    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;

    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;

    default:
      break;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
}

// a clear canvas function
function shakeCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    function() {
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}

// write a handler for the keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', shakeCanvas);
