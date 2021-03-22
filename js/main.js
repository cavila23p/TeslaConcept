const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
  navUL.classList.toggle('show');
  
});

function imgSlider(images){
  document.querySelector('.tesla').src = images;
}
