const gallery = document.querySelector('.gallery-images');
const images = document.querySelectorAll('.gallery-images img');
let index = 0;

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % images.length; // Loop back to first image
  updateGallery();
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length; // Loop back to last image
  updateGallery();
});

var $setter = $("#setter");
$setter.siblings(".wrap").css("max-width", $setter.width()+"px");

function updateGallery() {
  const imageWidth = document.querySelector('.image-gallery').clientWidth; // Get container width
  gallery.style.transform = `translateX(${-index * imageWidth}px)`; // Move horizontally by image width
}