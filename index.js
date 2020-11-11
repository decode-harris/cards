// current slide selector
const slides = document.querySelector('.slides');

// event [ slides ] : click card for mobile devices
slides.addEventListener('click', ()=> {

    // card face element selectors
    let front = document.querySelector('.front');
    let back = document.querySelector('.back');
    let box = document.querySelector('.box');
    
    // assign cursour mode to pointer
    slides.style.cursor = 'pointer';

    if (front.style.transform != 'perspective(500px) rotateY(180deg)') {
        // transform [ perspective ] & [ rotate ] front slides element to inactive view [ 180 deg ]
        front.style.transform = 'perspective(500px) rotateY(180deg)';
    }
    if (box.style.transform != 'perspective(500px) rotateY(180deg)') {
        // transform [ perspective ] & [ rotate ] front slides element to inactive view [ 180 deg ]
        box.style.transform = 'perspective(500px) rotateY(180deg) translate(0, 0, 85px)';
    }
    if (back.style.transform != 'perspective(500px) rotateY(360deg)') {
        // transform [ perspective ] & [ rotate ] back slides element to active view [ 360 deg ]
        back.style.transform = 'perspective(500px) rotateY(360deg)';
    }
    else {
        // transform [ perspective ] & [ rotate ] front slides element back to default position [ 0 deg ]
        front.style.transform = 'perspective(500px) rotateY(0deg)';
    
        // transform [ perspective ] & [ rotate ] front slides element back to default position [ 0 deg ]
        box.style.transform = 'perspective(500px) rotateY(0deg) translate(0, 0, 0px)';
    
        // transform [ perspective ] & [ rotate ] back slides element back to default position [ 180 deg ]
        back.style.transform = 'perspective(500px) rotateY(180deg)';
    
    }

});

// event [ slides ] : hover [ mouseover ] state for laptop & desktop devices
slides.addEventListener('mouseover', ()=> {
    
    let front = document.querySelector('.front');
    front.style.transform = 'perspective(500px) rotateY(180deg)';

    let back = document.querySelector('.back');
    back.style.transform = 'perspective(500px) rotateY(360deg)';
    back.style.backgroundImage = 'url(img.PNG)';
    
    let box = document.querySelector('.box');
    box.style.transform = 'perspective(500px) roatateY(180deg) translate(0, 0, 85px)';

});

// event [ slides ] : hover [ mouseleave ] state for laptop & desktop devices
slides.addEventListener('mouseleave', ()=> {

    let front = document.querySelector('.front');
    front.style.transform = 'perspective(500px) rotateY(0deg)';

    let back = document.querySelector('.back');
    back.style.transform = 'perspective(500px) rotateY(180deg)';

    let box = document.querySelector('.box');
    box.style.transform = 'perspective(500px) rotateY(0deg) translate(0, 0, 0px)';

});

