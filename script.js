//modal

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('exampleModal');
    var modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
});


//about us
document.addEventListener('DOMContentLoaded', function () {
    var elem = document.querySelector('#main-carousel');
    var flkty = new Flickity(elem, {
        cellAlign: 'left',
        contain: true,
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
        prevNextButtons: false,
        autoPlay: 5000,
        wrapAround: true
    });
});


//men, women, accessory
document.addEventListener('DOMContentLoaded', function () {
    var productHoodie = new Masonry ('#product_hoodie', {
        itemSelector:'.hoodie_details',
        columnWidth:'.hoodie_details',
        gutter:16,
    });

    var productT = new Masonry ('#product_t', {
        itemSelector:'.t_details',
    });

    var productHoodie = new Masonry ('#product_shirts', {
        itemSelector:'.shirts_details',
    });

    var productT = new Masonry ('#product_pants', {
        itemSelector:'.pants_details',
    });

});


// contact us

var map = L.map('map').setView([0,0], 2);
var bcit = [49.17, 123.5];
 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map); 

L.marker(bcit).addTo(map)
    .bindPopup('We are here')    
    .openPopup();

//lightbox
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
});


