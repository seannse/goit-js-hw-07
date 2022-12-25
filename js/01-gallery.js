import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);



const gallery = document.querySelector(".gallery");
const markupItems = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", markupItems);

gallery.addEventListener("click", onGalleryItemClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
  .map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </div>`;
  })
  .join("");
}

let instance;

function onGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

    instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="1280">
    `,
    {
      onShow: () => { window.addEventListener('keydown', onEscClick) },
      onClose: () => { window.removeEventListener('keydown', onEscClick) }
    });
  
  instance.show()
  
};

function onEscClick(event) {
  if (event.code === 'Escape') {
    instance.close()
  }
}
  
