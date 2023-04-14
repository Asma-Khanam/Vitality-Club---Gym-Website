// Smooth scrolling for nabber links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


let neon1 = document.getElementById('neon1');
let neon2 = document.getElementById('neon2');
let neon3 = document.getElementById('neon3');
let neon4 = document.getElementById('neon4');
let neon5 = document.getElementById('neon5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
  
    neon1.style.right = value * 0.7 + 'px';
    neon2.style.left = value * 0.7 + 'px';
    neon3.style.right = value * 0.7 + 'px';
    neon4.style.top = value * 0.7 + 'px';
    neon5.style.left = value * 0.7 + 'px';
});


