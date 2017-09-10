var i = 0;
var images = [];
var time = 2000; // para a função changeImage()

images[0] = 'image1.jpg';
images[1] = 'image2.jpg';
images[2] = 'image3.jpg';

// Inicialmente slide.src = images[0]
document.getElementById('slide').src = images[i];

// Adiciona evento no botão de Next Image
var listenButton = document.getElementById('buttonNext');
listenButton.addEventListener('click', nextImage);

// Adiciona evento no botão de Previous Image
var listenButton1 = document.getElementById('buttonBefore');
listenButton1.addEventListener('click', previousImage);

// Função para alterar a imagem ao clickar no botão(pŕoxima imagem)
function nextImage() {
    i++;

    if (i > images.length - 1) {
        i = 0;
    }

    document.getElementById('slide').src = images[i];
    console.log(i);

}

// Função para alterar a imagem ao clickar no botão(imagem anterior)
function previousImage() {
    //alert('previousImage');
    i--;

    if (i < 0){
        i = images.length - 1;
    }

    document.getElementById('slide').src = images[i];
    console.log(i);
}


// Função para alterar a imagem automaticamente, um slideshow de fato
function changeImage() {
    //document.slideShow.src = images[i];
    document.getElementById('slide').src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    console.log(i);
    setTimeout("changeImage()", time);
}

// primeira chamada a changeImage()
//window.onload = changeImage;