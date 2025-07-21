window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('abajo', window.scrollY > 0);
});

const sections = document.querySelectorAll(".section-content");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 300;
        const sectionId = current.getAttribute('id');
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        if ((scrollY > sectionTop && scrollY < sectionTop + sectionHeight) || (scrollY + windowHeight >= documentHeight)) {
            if(!current.classList.contains('visible')) {
                    current.classList.remove('invisible');
                    current.classList.add('visible');
            }
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href").includes(sectionId)) {
                    link.classList.add("active");
                }      
            });
        } else if(scrollY < sectionTop - 600){
            current.classList.remove('visible');
            current.classList.add('invisible');
        }
    });
});

window.addEventListener('scroll', () => {
    const goTop = document.getElementById("go-top");
    const scrollY = window.pageYOffset;
    goTop.classList.remove('invisible');
    if(scrollY <= 10){
        goTop.classList.add('invisible');
    }
});

window.addEventListener('load', () => {
    const home = document.getElementById("home");
    home.classList.remove('invisible');
    home.classList.add('visible');
});