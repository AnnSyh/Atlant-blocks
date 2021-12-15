'use strict'

const tovarItems = document.querySelectorAll('.cards__img');

tovarItems.forEach((item) => {
    item.addEventListener('mouseover', (evt) => {
        const imgSrcNew = evt.target.getAttribute('data-imgsrcnew');
        if (imgSrcNew) { evt.target.src = imgSrcNew; }

    });

    item.addEventListener('mouseout', (evt) => {
        const imgSrc = evt.target.getAttribute('data-imgsrc');
        if (imgSrc) { evt.target.src = imgSrc; }

    });
});