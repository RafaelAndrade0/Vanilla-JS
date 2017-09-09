var i = 0;
// Empty Array
var images = [];
var time = 3000; 

// Image List
images[0] = 'image1.jpg';
images[1] = 'image2.jpg';
images[2] = 'image3.jpg';

// Change Image
function changeImage () {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i ++;
    } else {
        i = 0;
    }

    setTimeout("changeImage()", time);
}

window.onload = changeImage;