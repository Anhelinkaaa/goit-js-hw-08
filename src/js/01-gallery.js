import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function handlerCreateGall(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      width = "250px"
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
}

gallery.insertAdjacentHTML("beforeend", handlerCreateGall(galleryItems));

gallery.addEventListener("click", function (evt) {
  evt.preventDefault();
  const target = evt.target;

  if (target.classList.contains("gallery__image")) {
    const currentItem = target.closest(".gallery__item");
    const { source } = target.dataset;
    const item = galleryItems.find((item) => (item.original = source));
    const instance = basicLightbox.create(`
	<div class="modal">
  <img src="${item.original}" alt="${item.description}" width="800" heigh="600">
  </div>`);
    // instance.show();
  }
});
