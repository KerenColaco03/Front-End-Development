"use strict";
(() => {
  function addItem(text) {
    const item = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text;

    reviews.appendChild(item);
    item.appendChild(span);
  }



  function dataFromElement(el) {
    return {
      text: el.querySelector('span').textContent
    }
  }

  function clearList() {
    while(reviews.firstChild) {
      reviews.removeChild(reviews.firstChild);
    }
  }


  function saveToStorage(){
    const listItems = reviews.querySelectorAll('li')
    const elements = Array.from(listItems);
    console.log(listItems)
    const data = elements.map(dataFromElement);
    localStorage.setItem("reviews", JSON.stringify(data));
  }



  function loadFromStorage() {
    const data = JSON.parse(localStorage.getItem("reviews"));
    if (data) {
      clearList();
      for (const item of data) {
        addItem(item.text);
      }
    }
  }



  add.addEventListener('click', ev => {
    if(text.value) {      // check we have data
      addItem(text.value);
      text.value = null;  // clear the input
      text.focus();
      saveToStorage();
    }
  });


  text.addEventListener('keydown', ev => {
    if(ev.key == "Enter") {
      add.click();
    }
  });
  loadFromStorage();
})()
