let menuIcon = document.querySelector('#menu-icon');


menuIcon.addEventListener('click', () => {
    let mobileNavbar = document.querySelector('#mobile-sidebar');
    console.log(mobileNavbar);
    mobileNavbar.style.display = 'flex';
});


let crossBtn = document.querySelector('#close-sidebar');
crossBtn.addEventListener('click', () => {
    let mobileNavbar = document.querySelector('#mobile-sidebar');
    console.log(mobileNavbar);
    mobileNavbar.style.display = 'none';
});
