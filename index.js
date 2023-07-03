// Access the button elements
const pushButton = document.getElementById('pushButton');
const popButton = document.getElementById('popButton');
const shiftButton = document.getElementById('shiftButton');
const unshiftButton = document.getElementById('unshiftButton');
const spliceButton = document.getElementById('spliceButton');
const sliceButton = document.getElementById('sliceButton');
const joinButton = document.getElementById('joinButton');
const concatButton = document.getElementById('concatButton');
const reverseButton = document.getElementById('reverseButton');
const sortButton = document.getElementById('sortButton');

// Define the original array
let emails = ['john', 'jane', 'mark'];

// Add event listeners to the buttons
pushButton.addEventListener('click', function() {
  emails.push('alice');
  document.getElementById('push').innerHTML = emails;
  pushButton.disabled = true; // Disable the button after click
});

popButton.addEventListener('click', function() {
  emails.pop();
  document.getElementById('pop').innerHTML = emails;
  popButton.disabled = true; // Disable the button after click
});

shiftButton.addEventListener('click', function() {
  emails.shift();
  document.getElementById('shift').innerHTML = emails;
  shiftButton.disabled = true; // Disable the button after click
});

unshiftButton.addEventListener('click', function() {
  emails.unshift('mike', 'sarah');
  document.getElementById('unshift').innerHTML = emails;
  unshiftButton.disabled = true; // Disable the button after click
});

spliceButton.addEventListener('click', function() {
  emails.splice(2, 0, 'peter');
  document.getElementById('splice').innerHTML = emails;
  spliceButton.disabled = true; // Disable the button after click
});

sliceButton.addEventListener('click', function() {
  let slicedEmails = emails.slice(1, 3);
  document.getElementById('slice').innerHTML = slicedEmails;
  sliceButton.disabled = true; // Disable the button after click
});

joinButton.addEventListener('click', function() {
  let joinedEmails = emails.join(', ');
  document.getElementById('join').innerHTML = joinedEmails;
  joinButton.disabled = true; // Disable the button after click
});

concatButton.addEventListener('click', function() {
  let additionalEmails = ['oliver', 'hannah'];
  let combinedEmails = emails.concat(additionalEmails);
  document.getElementById('concat').innerHTML = combinedEmails;
  concatButton.disabled = true; // Disable the button after click
});

reverseButton.addEventListener('click', function() {
  emails.reverse();
  document.getElementById('reverse').innerHTML = emails;
  reverseButton.disabled = true; // Disable the button after click
});

sortButton.addEventListener('click', function() {
  emails.sort();
  document.getElementById('sort').innerHTML = emails;
  sortButton.disabled = true; // Disable the button after click
});
