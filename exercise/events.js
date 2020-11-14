console.log('It works');

const butts = document.querySelector('.butts');
const cold = document.querySelector('.cold');

function handleClick() {
  document.body.style = 'background-color:yellow';
}

const hooray = () => console.log('This is an Arrow Function Trigger');
// callback functions,

// listen on multiple items
const buyButtons = document.querySelectorAll('.buy');

function handleBuyButtonClick(event) {
  console.log(`It costs ${parseFloat(event.currentTarget.dataset.price)}`);
  console.log(event.target);
  console.log(event.currentTarget);
  /*  difference between currentTarget and Target is that target highlights the area of the element that triggered the click
  and the currentTarget returns the element that is bound to the event. */
  // stop event from bubbling up, means if there is an element higher than the current target that has an event tied to it, the stopProp prevents it from running so the event focuses on one.
  event.stopPropagation();
}

buyButtons.forEach(button => {
  button.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener('click', function() {
  console.log('Window is clicked');
});

// event object is returned by eventlistener methods

// learning coercion : this is when a value of a different type is changed to a real boolean

// ternaries shorthand if statement condition ? true : false



// change icon onlclick
function changeIcon(event) {
  const main = event.currentTarget;
  const item = main.querySelector('.elementor-button-text');
  if (item.classList.contains('clicked')) {
    // remove the class
    item.classList.remove('clicked');
    item.innerHTML = `<svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="27.9999" height="3.29409" rx="1.64704" fill="#474947"/> <rect x="7.41187" y="8.23517" width="20.5882" height="3.29409" rx="1.64704" fill="#474947"/> <rect y="16.4703" width="27.9999" height="3.29409" rx="1.64704" fill="#474947"/> </svg>`;
    window.location = main.href;
  } else {
    item.classList.add('clicked');
    item.innerHTML = `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="3.60327" y="0.0386963" width="31.5918" height="5.09545" rx="2.54772" transform="rotate(45 3.60327 0.0386963)" fill="black"/>
<rect y="22.3387" width="31.5918" height="5.09545" rx="2.54772" transform="rotate(-45 0 22.3387)" fill="black"/>
</svg>`;
  }
}

document.querySelector('site-menu a').addEventListener('click', changeIcon);


window.scroll({ top:300,left:0,behavior:'smooth'})
		tempVal = setTimeout(
			function(){
	 document.querySelector('.back-to-top__cont').classList.remove('back-to-top__cont--visible');
		}, 1000);


    function scrollBackToTop() {
      let tempVal = 0;
      if(0 < scrollY) {
        window.scroll({ top:300,left:0,behavior:'smooth'});
        tempVal = setTimeout(
          function(){
       document.querySelector('.back-to-top__cont').classList.remove('back-to-top__cont--visible')
        }, 1000)
      }
      else{
        clearTimeout(tempVal);
      }
    }