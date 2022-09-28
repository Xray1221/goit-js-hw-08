// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line


const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createImageCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createImageCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" 
      href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}"
      title="${description}" />
    </a>`;
    })
    .join("");
}
const lightbox = new SimpleLightbox('.gallery a', { /* options */ });