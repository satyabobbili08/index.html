var typed= new Typed(".multiple-text",{
    strings: ["FrontEnd Developer ", "Backend Developer" , "Java Developer"  ],
    typeSpeed:100,
    backSpeed:100,
    backDelay: 1000,
    loop:true
});
AOS.init();

const menuToggle = document.getElementById('menu-toggle');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', () => {
  overlay.classList.toggle('active');
});

