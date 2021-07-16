"use strict"
//thank you message
contact.addEventListener('submit', ev => {
  alert("Thank you for contacting us")
  contact.reset();
  ev.preventDefault();
});
