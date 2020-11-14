console.log('ya ya wes we get it.. IT WORKS!');

const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tablist"]');
comst tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function showTab(event) {
  console.log(event);

   const cur = event.currentTarget;
}

tabButtons.forEach(button => button.addEventListener('click', showTab));
