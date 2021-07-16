//image slider
"use strict";
(function(){

  const images = [
    "images/avengers.jpg",
    "images/marvelmovie.jpg",
    "images/jumanji.jpg"
  ];
  let num = 0;

  const getNext = () => {
    num++;
    if (num >= images.length) num = 0;
  }

  const getPrev = () => {
    num--;
    if (num < 0) num = images.length-1;
  }

  const changeImg = () => {
    event.target.id === "next" ? getNext() : getPrev()
    slider.src = images[num];
  }


  next.addEventListener('click', changeImg);
  prev.addEventListener('click', changeImg);

})()
