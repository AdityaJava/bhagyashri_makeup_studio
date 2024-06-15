let menuIcon = document.querySelector('#menu-icon');


menuIcon.addEventListener('click', () => {
    let mobileNavbar = document.querySelector('#mobile-sidebar');
    console.log(mobileNavbar);
    mobileNavbar.style.display = 'flex';

});
