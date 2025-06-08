

// text seperti diketik


const texts = ["Frontend Dev in progress", "student", ];
  let count = 0;
  let index = 0;
  let currentText = '';
  let isDeleting = false;
  const speed = 150; // kecepatan ketik
  const el = document.getElementById("typed-text");

  function type() {
    currentText = texts[count];
    if (isDeleting) {
      index--;
    } else {
      index++;
    }

    el.textContent = currentText.substring(0, index);

    if (!isDeleting && index === currentText.length) {
      setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && index === 0) {
      isDeleting = false;
      count = (count + 1) % texts.length;
    }

    setTimeout(type, isDeleting ? speed / 2 : speed);
  }

  type();
  
  // navbar mobile

const buttons = document.querySelectorAll('.btn');
const navbar = document.querySelector('.nav');

function navActive(){
  setTimeout(() =>{
    navbar.classList.toggle('active')
  }, 200);
};

function scrollToTop(){
  window.scrollTo({
    top : 0,
    behavior : "smooth"
  })
  navbar.classList.toggle('active')
}
