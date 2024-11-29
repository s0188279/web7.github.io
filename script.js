$(document).ready(function() {
    const $gallery = $('.gallery');

    // Инициализация слайдера
    $gallery.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 768, // Для смартфонов
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // Обновление пейджера
    function updatePager() {
        const currentSlide = $gallery.slick('slickCurrentSlide') + 1; // Индекс текущего слайда +1
        const totalSlides = $gallery.slick('getSlick').slideCount; // Общее количество слайдов
        const totalPages = Math.ceil(totalSlides / 3); // Количество страниц (при показе 3 слайдов)

        $('.current-page').text(currentSlide);
        $('.total-pages').text(totalPages);
    }

    // Обновление пейджера при смене слайда
    $gallery.on('afterChange', function(event, slick, currentSlide) {
        updatePager();
    });

    updatePager(); // Инициализация пейджера
});

