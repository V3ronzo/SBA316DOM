// Cache elements using getElementById and querySelector/querySelectorAll
const header = document.getElementById('header');
const form = document.querySelector('#myForm');
const inputs = document.querySelectorAll('input');

// Use parent-child-sibling relationship
const messageContainer = header.nextElementSibling.nextElementSibling;

// Iterate over a collection of elements
inputs.forEach(input => {
  input.addEventListener('input', validateInput);
});

// Create a new element using createElement
const successMessage = document.createElement('p');

// Use appendChild and/or prepend to add new elements
messageContainer.appendChild(successMessage);

// Use DocumentFragment or cloneNode for templating
const fragment = document.createDocumentFragment();
const templateMessage = document.createElement('p');
templateMessage.textContent = 'Website/Social Link is required';
fragment.appendChild(templateMessage.cloneNode(true));
messageContainer.appendChild(fragment);

// Modify HTML or text content in response to user interaction
form.addEventListener('submit', (event) => {
  event.preventDefault();
  successMessage.textContent = `Thank you, ${form.name.value}!`;
});

// Modify style and/or CSS classes in response to user interaction
function validateInput(event) {
  const input = event.target;
  if (input.validity.valid) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}

// Modify an attribute in response to user interaction
form.addEventListener('submit', () => {
  inputs.forEach(input => {
    input.setAttribute('disabled', true);
  });
});

const thankYouConfirm = window.confirm('Thank you for submitting!');
// // Use BOM properties or methods
// console.log(navigator.userAgent); // BOM property
// setTimeout(() => {
//   alert('Thank You.'); // BOM method
// }, 5000);