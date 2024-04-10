//modal

document.addEventListener('DOMContentLoaded', function() {
    //This code waits until the whole web page is fully loaded and ready for interaction.
    var modal = document.getElementById('exampleModal');
    //It looks for an element in the HTML document with the specific ID "exampleModal". This element is usually the modal window that we want to display.
    var modalInstance = new bootstrap.Modal(modal);
    //It creates a new instance of a modal window using the Bootstrap Modal class. This instance represents the modal window we want to show.
    modalInstance.show();
    //it tells the modal instance to show itself on the screen. This action makes the modal window visible to the user.
});



// contact us: testimonial
document.addEventListener('DOMContentLoaded', function () {
    //This part of the code waits until the entire webpage finishes loading before it does anything.
    var elem = document.querySelector('#testimonial-carousel');
    // It looks for a specific section on the webpage where testimonials are displayed. 
    var flkty = new Flickity(elem, {
        //This line creates a new instance of the Flickity carousel. It's like setting up a new carousel machine.
        //elem: This variable represents the HTML element that contains the carousel. It's like telling the carousel machine where it should operate.
        cellAlign: 'left',
        //This option specifies how the carousel cells (individual items in the carousel) should align within the carousel container. In this case, it aligns them to the left side.
        contain: true,
        //This option ensures that each carousel cell fits entirely within the carousel container without overflowing.
        pageDots: true,
        //to show pagination dots at the bottom of the carousel.
        //true, it shows the dots; when set to false, it hides them.
        prevNextButtons: false,
        //hides buttons
        autoPlay: 5000,
        //automatic playback, 5000miliseconds=5seconds
        wrapAround: true
        //the carousel should wrap around to the beginning after reaching the last slide
    });
});


//validation
document.addEventListener('DOMContentLoaded', function() {
    //sets up an event listener that waits for the HTML document to be fully loaded, JavaScript code inside the function runs only after the DOM (Document Object Model) is ready.
    var accountLink = document.getElementById('accountLink');
    //This line retrieves the HTML element with the ID "accountLink" and assigns it to the variable accountLink
    var myForm = document.getElementById('myForm');
    //this line gets the HTML form element with the ID "myForm" and stores it in the variable myForm
    accountLink.addEventListener('click', function(event) {
        //Add click event listener to the account link
        event.preventDefault(); // Prevent default link behavior when it's clicked

        // Show the form
        myForm.style.display = 'block';
        //This line changes the CSS display property of the myForm element to "block", making the form visible on the webpage. 
    });

    // Initialize form validation
    myForm.addEventListener('submit', function(event) {
        if (!myForm.checkValidity()) {
            // Prevent form submission if validation fails
            event.preventDefault();//If the form is invalid, this line prevents the default form submission behavior
            event.stopPropagation();//any other event listeners attached to parent elements from being triggered.
        }
    }, false);
});

//lightbox gallery
document.addEventListener('DOMContentLoaded', function() {
    // Initialize LightGallery for each gallery
    var galleries = document.querySelectorAll('.grid-container');
    galleries.forEach(function(gallery) {
        lightGallery(gallery, {
            selector: 'a', // Select anchor elements as items
            counter: false, // Hide the counter
            download: false, // Disable download button
            // Add more options as needed
        });
    });
});