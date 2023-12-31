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

// const res = images.map((img) => {
//   console.log(img);
//   const liEl = document.createElement('li')
//   liEl.classList.add('gallery_item')
//   const imgEl = document.createElement('img')
//   imgEl.src = img.url
//   imgEl.alt = img.alt
//   imgEl.width = 1000


//   liEl.appendChild(imgEl)

//   return liEl
// })

const gallery = document.querySelector('.gallery');
let galeryEl = ''

images.forEach(el => {
  console.log(el);
  galeryEl += `<li>
    <img src="${el.url}" alt="${el.alt}">
  </li>`
})

gallery.insertAdjacentHTML('beforeend', galeryEl)