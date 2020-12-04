const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

/** we need an array to hold our state 
(data contained in the application that reflcts on the front end) * */

let items = [];

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  if (!name) return;
  const item = {
    name,
    id: Math.floor((1 + Math.random()) * 1000),
    complete: false,
  };
  // push item into array
  items.push(item);
  // clear the form, there is no bubbling in a form submission
  e.target.reset();
  // fire an event
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  const html = items
    .map(
      item => `<li class="shopping-item">
    <input 
        type="checkbox" 
        value="${item.id}"
        ${item.complete && 'checked'}> 
    <span class="itemName"> ${item.name} </span>
    <button 
        aria-label="Remove ${item.name}"
        value="${item.id}"
        >&times;
    </button>
  </li>`
    )
    .join('');
  list.innerHTML = html;
}

function mirrorToLocalStorage() {
  localStorage.setItem('itemList', JSON.stringify(items));
}

function restoreFromLocal() {
  const listItems = JSON.parse(localStorage.getItem('itemList'));
  if (listItems.length) {
    items.push(...listItems);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  // update the array
  items = items.filter(item => item.id !== id);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  // change the complete to true
  const itemRef = items.find(item => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
// event delegation - listen to click on the ul but assign it to button
list.addEventListener('click', function(e) {
  const id = parseInt(e.target.value);
  if (e.target.matches('button')) {
    deleteItem(id);
  }
  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
});
restoreFromLocal();
