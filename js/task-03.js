const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Пишемо функцію, яка створить розмітку картки
const makeGalleryCard = ({
  url,
  alt,
}) => `<li class="gallery-item">
      <img src="${url}" alt="${alt}" width="450">
  </li>`;

// Cтворюємо масив із розмітки і вставляємо у список .gallery
const listEl = document.querySelector('.gallery');

const markup = images.map((data) => makeGalleryCard(data)).join('');

// listEl.innerHTML = markup;

listEl.insertAdjacentHTML('afterbegin', markup);
console.log(markup);