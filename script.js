
// toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar =  document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
} 

// scrol section

let section = documnet.querySelectorAll("section");
let navLinks = documnet.querySelectorAll('header nav a')
   


window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height)
        {
            // active navbar navLinks
            navLinks.forEach(links =>  {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');     

            });
            // active  section for animation
            sec.classList.add("show-animate");
        }
        // if want to use animation that repete and scrole
        else{
            sec.classList.remove('show-animate');
    }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggele navbar scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}