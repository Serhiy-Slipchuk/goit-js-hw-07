import { galleryItems } from './gallery-items.js';
// Change code below this line

createGalleryItemsHTML(galleryItems);

const galleryListEl = document.querySelector('.gallery');

galleryListEl.addEventListener('click', clickHandler);

let instance = {};


function createGalleryItemsHTML(galleryItems) {
    const items = galleryItems.map(({ preview, original, description }) => {
        const itemEl = document.createElement('div');
        itemEl.classList.add('gallery__item');

        const linkEl = document.createElement('a');
        linkEl.classList.add('gallery__link');
        linkEl.href = original;
        itemEl.appendChild(linkEl);

        const imageEl = document.createElement('img');
        imageEl.classList.add('gallery__image');
        imageEl.src = preview;
        imageEl.dataset.sourse = original;
        imageEl.alt = description;
        linkEl.appendChild(imageEl);
        return itemEl;
    });

    const listEl = document.querySelector('.gallery');
    listEl.append(...items);
}

function clickHandler(e) {
    e.preventDefault();
    if (!e.target.classList.contains('gallery__image')) {
        return;
    }

    instance = basicLightbox.create(`<img src="${e.target.dataset.sourse}" width="1280" height="852">`);
    instance.show();
    window.addEventListener('keydown', closeModalByEscKey);
}

function closeModalByEscKey(e) {
    if (e.code === 'Escape') {
        instance.close();
        window.removeEventListener('keydown', closeModalByEscKey);
    };
}