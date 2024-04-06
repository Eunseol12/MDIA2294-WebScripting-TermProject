document.addEventListener('DOMContentLoaded', function () {
    var elem = document.querySelector('#main-carousel');
    var flkty = new Flickity(elem, {
        cellAlign: 'left',
        contain: true,
        pageDots: true,
        pageDots: true,
        prevNextButtons: false,
        autoPlay: 5000,
        wrapAround: true
    });
});



document.addEventListener('DOMContentLoaded', function () {
    var elem = document.querySelector('#testimonial-carousel');
    var flkty = new Flickity(elem, {
        cellAlign: 'left',
        contain: true,
        pageDots: true,
        pageDots: true,
        prevNextButtons: false,
        autoPlay: 5000,
        wrapAround: true
    });
});