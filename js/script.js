/*========== menu icon navbar ==========*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/*-----------dark light mode-------- */
let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () =>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}

window.onscroll = () =>{
    /*========== sticky navbar ==========*/

    let header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY > 100);

    /*========== remove menu icon navbar when click navbar link (scroll) ==========*/
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
}

/*========== scroll reveal ==========*/
// let screen_size = window.matchMedia("(min-width: 1000px)");
// ScrollReveal({
//     reset: true,
//     distance: "80px",
//     duration: 1500,
//     delay: 200
// });
// if(screen.width > screen_size ){
//     ScrollReveal().reveal(".home-content, .heading",{origin: 'top'});
//     ScrollReveal().reveal(".home-img img, .services-container, .portfolio-box, .contact form",{origin: 'bottom'});
//     ScrollReveal().reveal('.about-img img, .home-content h1', { origin:'left' });
//     ScrollReveal().reveal('.about-content, .home-content h3, .home-content p, .education-content', { origin:'right' });
    
// }

