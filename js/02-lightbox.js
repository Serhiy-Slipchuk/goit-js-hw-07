import { galleryItems } from './gallery-items.js';
// Change code below this line

createGalleryItemsHTML(galleryItems);

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});

function createGalleryItemsHTML(galleryItems) {
    const items = galleryItems.map(({ preview, original, description }) => {
        const itemEl = document.createElement('a');
        itemEl.classList.add('gallery__item');
        itemEl.href = original

        const imageEl = document.createElement('img');
        imageEl.classList.add('gallery__image');
        imageEl.src = preview;
        imageEl.alt = description;
        itemEl.appendChild(imageEl);
        return itemEl;
    });

    const listEl = document.querySelector('.gallery');
    listEl.append(...items);
}
