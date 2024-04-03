const testimonialArray = [
    "testimonials/testimonial1.png",
    "testimonials/testimonial2.png",
    "testimonials/testimonial3.png",
    "testimonials/testimonial4.png",
    "testimonials/testimonial5.png"
];


const first_load=() => {
    set_main_image (0);
}

const set_main_image = (index) => {
    document.getElementById('main-image').src = testimonialArray[index];
    document.getElementById('current-index').value = index;
}


const set_nav_first = ()=> {
    set_main_image(0);
}

const set_nav_last = () => {
    set_main_image(testimonialArray.length -1);
}

const set_nav_next = () => {
}

window.addEventListener("load", first_load);

let prev_btn = document.getElementById('prev');
prev.addEventListener('click',)