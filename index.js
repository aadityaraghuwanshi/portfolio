
Let sections = document.querySelectorAll('section');
Let navlinks = document.querySelectorAll('header nav a');

window.onscroll= () => {
    sections.forEach(sec =>{
        Let top = window.scrollY;
        Let offset = sec.offsetTop - 150;
        Let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id +']').classList.add('active');
            });
        };
        
    });

    /* =========sticky navbar=========aditya */
    Let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
};

var typed= new typed(".text", {
    strings:["Frontend Developer", "web Developer"],            /* js of portfolio*/
    typeSpeed: 100,
    backSpeed: 100,
     backDelay: 1000,
     loop:true
})
/*ScrollReveal({
    reset: true,
    distance:'80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });