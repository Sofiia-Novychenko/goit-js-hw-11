import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchPhotosByQuery } from './js/pixabay-api.js';
import { createGalleryCardTemplate } from './js/render-functions.js';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loader = document.querySelector('.loader');

loader.style.display = 'none';

// ініціалізація модального вікна галереї
const galleryModal = new SimpleLightbox('.js-gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  className: 'simple-lightbox',
});

const OnSearchFormSubmit = event => {
  event.preventDefault();

  loader.style.display = 'block';

  galleryEl.innerHTML = '';

  let userInputValue = event.currentTarget.elements.user_query.value.trim();

  if (userInputValue === '') {
    loader.style.display = 'none';

    iziToast.warning({
      title: 'Caution',
      message: 'You forgot important data',
      position: 'topRight',
    });

    return;
  }

  fetchPhotosByQuery(userInputValue)
    .then(data => {
      if (data.total === 0) {
        iziToast.error({
          title: '',
          messageColor: '#FFFFFF',
          messageSize: 16,
          messageLineHeight: 1.5,
          backgroundColor: '#EF4040',
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });

        galleryEl.innerHTML = ' ';
        searchFormEl.reset();
        return;
      }

      galleryEl.insertAdjacentHTML(
        'beforeend',
        createGalleryCardTemplate(data.hits)
      );
      galleryModal.refresh();
    })
    .catch(err => {
      console.log(err.message);
    })
    .finally(() => {
      loader.style.display = 'none';
      event.target.reset();
    });
};

searchFormEl.addEventListener('submit', OnSearchFormSubmit);
