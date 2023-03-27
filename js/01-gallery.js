import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRefs = document.querySelector('.gallery');
galleryRefs.style.display = 'flex';
galleryRefs.style.gap = '10px';
galleryRefs.style.flexWrap = 'wrap';

const imagesRef = galleryItems.map(({ preview, original, description }) => {
    return `
       <li class=“gallery__item”>
       <a class=“gallery__link” href=${original}>
    <img
      class=“gallery__image”
      src=${preview}
      data-source=${original}
      alt=“${description}”
      width='370';
      height='250'
    />
  </a>
</li>`;
  })
  .join(' ');

galleryRefs.innerHTML = imagesRef;

galleryRefs.addEventListener('click', onGalleryClick)

function onGalleryClick(event) {
    event.preventDefault();

    const currentItem = event.target;
    if (currentItem.nodeName !== 'IMG') {
        return;
    }

    const currentImg = event.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${currentImg}" alt="" width="800" height="600">
    `)
    instance.show();

}

// console.log(galleryItems);