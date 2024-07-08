import '../css/style.css'

// Get the lightbox container
const lightbox = document.querySelector('.lightbox');

// Get the lightbox content container
const lightboxContent = document.querySelector('.lightbox-content');

// Get the lightbox image element
const lightboxImage = document.querySelector('.lightbox-image');

// Get the lightbox caption element
const lightboxCaption = document.querySelector('.lightbox-caption');

// Get the lightbox close button
const lightboxClose = document.querySelector('.lightbox-close');

// Add event listeners to the images
document.querySelectorAll('.gallery-item img[data-lightbox]').forEach((image) => {
  image.addEventListener('click', (event) => {
    // Get the image src and alt attributes
    const src = event.target.src;
    const alt = event.target.alt;
    const caption = event.target.nextElementSibling.textContent;

    // Set the lightbox image src and alt attributes
    lightboxImage.src = src;
    lightboxImage.alt = alt;

    // Set the lightbox caption text
    lightboxCaption.textContent = caption;

    // Show the lightbox
    lightbox.style.display = 'block';
  });
});
lightboxClose.addEventListener("click", () => {
  // Hide the lightbox
  lightbox.style.display = 'none';
})

