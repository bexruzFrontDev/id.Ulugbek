let main = document.querySelector('.main');
let card = document.querySelector('.card');
let modalContainer = document.querySelector('.modal-container');
let modalContent = document.querySelector('.modal-content');
let closeBtn = document.querySelector('.close');

const getApi = [
  {
    id: 1,
    url: 'https://hips.hearstapps.com/pop.h-cdn.co/assets/17/24/1600x920/gallery-1497377943-dsc-1196asdfa.jpg?resize=640:*',
  },
  {
    id: 2,
    url: 'https://cdn.motor1.com/images/mgl/zxp3Mb/s3/bugatti-chiron-profilee-2022.jpg',
  },
  {
    id: 3,
    url: 'https://supercarblondie.com/wp-content/uploads/Bugattis-highly-customized-Le-Muguet-Chiron-Super-Sport.png',
  },
  {
    id: 4,
    url: 'https://avatars.mds.yandex.net/get-vertis-journal/3934100/2017-Bugatti-Chiron-La-Mer-Argentee-7-2048x1365.webp_1704541081121/orig',
  },
];

function api() {
  let html = '';
  getApi.forEach((el) => {
    html += `
            <div class="active" data-id="${el.id}">
                <img src=${el.url} />
            </div>
        `;
  });
  main.innerHTML = html;
}

api();

let activeItems = document.querySelectorAll('.active');

activeItems.forEach((activeItem) => {
  activeItem.addEventListener('click', function () {
    let id = this.getAttribute('data-id');
    let selectedImage = getApi.find((item) => item.id == id);
    if (selectedImage) {
      modalContent.src = selectedImage.url;
      modalContainer.style.display = 'block';
    }
  });
});

closeBtn.addEventListener('click', function () {
  modalContainer.style.display = 'none';
});
