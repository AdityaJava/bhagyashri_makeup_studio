let heroSection = document.querySelector('.hero-section');
console.log(heroSection);
let imagePaths = ['D:\bhagyashri_makeup_studio\photos\work-photo-section\photo1.jpeg', 'D:\bhagyashri_makeup_studio\photos\work-photo-section\photo2.jpeg', 'D:\bhagyashri_makeup_studio\photos\work-photo-section\photo3.jpeg'];
let i = 1;
var timer = setInterval(() => {
    console.log('calling')
    if (i >= 9) {
        i = 1;
        return;
    }
    //heroSection.style.backgroundImage = `url(${imagePaths[i++]})`;
    let photoURL = `photos/work-photo-section/photo${i++}.jpeg`;
    console.log(photoURL)
    heroSection.style.backgroundImage = `url(${photoURL})`;
}, 1000);