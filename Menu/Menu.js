/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [ 'Students', 'Faculty', "What's New", 'Tech Trends', 'Music', 'Log Out' ];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const menuCreator = (arr) => {
  // Create the menu div and assign it's class
  const menu = document.createElement('div');
  menu.classList.add('menu');

  // Create the ul and append it to the div
  const mainUl = document.createElement('ul');
  menu.appendChild(mainUl);

  //iterate over the array and make new li's
  arr.forEach((element) => {
    let newItem = document.createElement('li');
    newItem.textContent = element;
    newItem.style.cursor = 'pointer';
    mainUl.appendChild(newItem);
  });

  // add the event listener for the menu button
  // grab the menu button
  const menuButton = document.querySelector('.menu-button').addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('menu--open');
  });

  // Return menu
  return menu;
};

// Attach the menu to the header
const header = document.querySelector('.header').appendChild(menuCreator(menuItems));
