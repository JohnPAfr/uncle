// Selectors
const gallery = document.querySelector('.galerie');
const close = document.querySelector('.lightbox__close');
const photoContainer = document.querySelector(".lightbox__container__photo");

//Create a div tag to be cloned. It will contain one img per clone
let div = document.createElement('div');
//Add a class to the div for design purpose
div.className = "galerie__photoContainer";

//Create an img tag that will be cloned
let img = document.createElement('img');


photos.forEach((photo, index) => {
    /* Create a clone for each element in the object "photos" wich is in variables.js */

    let imgClone = img.cloneNode();
    imgClone.src = photo.src;
    imgClone.alt = photo.name;
    imgClone.id = index;

    /* Create a clone to add the cloned img tag so that each img is
    inside a div. It's usefull to make an hover animation with css */
    let divClone = div.cloneNode();
    divClone.appendChild(imgClone);

    //Add the cloned div with the cloned img to the gallery
    gallery.appendChild(divClone);
})

//Click event to open the lightbox
gallery.addEventListener('click', openGallery);
close.addEventListener('click', closeGallery);

function openGallery(e) {
    //Selectors to undisplay
    document.querySelector('.galerie').style.display = "none";
    document.querySelector('.jeux').style.display = "none";
    document.querySelector('.nav').style.display = "none";
    document.querySelector('.galerie__title').style.display = "none";
    //Selector to display
    document.querySelector(".lightbox").style.display = "block";
    //Add the img that was clicked to the lightbox container
    photoContainer.appendChild(e.target.cloneNode());
}

function closeGallery(e) {
    //Selectors to displayed
    document.querySelector('.galerie').style.display = "grid";
    document.querySelector('.jeux').style.display = "block";
    document.querySelector('.nav').style.display = "block";
    document.querySelector('.galerie__title').style.display = "block";
    //Selector to undisplay
    document.querySelector(".lightbox").style.display = "none";
    //remove the img in the lightbox
    photoContainer.removeChild(photoContainer.firstChild);

    
}
