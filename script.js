let heroSection = document.querySelector('.hero-section');
console.log(heroSection);

let i = 1;
let numberOfImages = 3
var timer = setInterval(() => {
    if (i >= (numberOfImages + 1)) {
        i = 1;
        return;
    }
    //heroSection.style.backgroundImage = `url(${imagePaths[i++]})`;
    let photoURL = `photos/hero-section-carousel/photo${i++}.jpeg`;
    heroSection.style.backgroundImage = `url(${photoURL})`;
}, 3000);