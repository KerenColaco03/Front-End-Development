//menu toggler
menuToggler.addEventListener('click', ev => {
  menu.classList.toggle('open');
  menuToggler.textContent = menuToggler.textContent ==="X" ? "≡" : "X";
});

//dark and light mode toggle
const lightMode = document.getElementById('lightMode');
lightMode.addEventListener('change', () => {
  document.body.classList.toggle('light');
});

//back to top button
const backToTop = document.querySelector('.backToTop');

window.addEventListener('scroll', () => {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    backToTop.style.display = 'block';
  }
  else{
    backToTop.style.display = 'none';
  }
})
backToTop.addEventListener('click', () => {
  window.scroll({
    top: 0 ,
  })
})
