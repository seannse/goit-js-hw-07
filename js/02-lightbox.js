import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const markupItems = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", markupItems);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}" />
    </a>
    `;})
    .join("");
}

let ligthbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

