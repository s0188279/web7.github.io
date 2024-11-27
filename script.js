let currentPage = 0;
const totalItems = 15;
const itemsPerPage = 5;

const totalPages = Math.ceil(totalItems / itemsPerPage);

const gallery = document.querySelector('.gallery');
const pageInfo = document.getElementById('page-info');

function moveSlide(direction) {
    currentPage += direction;

    if (currentPage < 0) {
        currentPage = totalPages - 1;
    } else if (currentPage >= totalPages) {
        currentPage = 0;
    }

    updateGalleryPosition();
}

function updateGalleryPosition() {
    const offset = -currentPage * (itemsPerPage * 300); // 300px - ширина одного изображения
    gallery.style.transform = `translateX(${offset}px)`;
    pageInfo.textContent = `${currentPage + 1} / ${totalPages}`;
}

updateGalleryPosition();
