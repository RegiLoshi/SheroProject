document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const body = document.body;

    mobileMenuToggle.addEventListener('click', function() {
        body.classList.toggle('mobile-nav-open');
    });
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        breakpoints: {
            768: {
                perView: 2 
            },
            480: {
                perView: 1  
            }
        }
    }).mount();
});