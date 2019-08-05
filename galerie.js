// Selectors
const gallery = document.querySelector('.galerie');
const close = document.querySelector('.lightbox__close');
const lightbox = document.querySelector(".lightbox__container");
const lightboxPhoto = document.querySelector(".lightbox__container__photo");
const caption = document.querySelector('.caption');
const left = document.querySelector(".lightbox__left");
const right = document.querySelector(".lightbox__right");


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
    imgClone.index = index;

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
left.addEventListener('click', prevPhoto);
right.addEventListener('click', nextPhoto);


function openGallery(e) {
    //Selectors to undisplay
    document.querySelector('.galerie').style.display = "none";
    document.querySelector('.jeux').style.display = "none";
    document.querySelector('.nav').style.display = "none";
    document.querySelector('.galerie__title').style.display = "none";
    //Selector to display
    document.querySelector(".lightbox").style.display = "block";
    //Change the img attr in the lightbox to with the img that was clicked
    lightboxPhoto.src = e.target.src;
    lightboxPhoto.name = e.target.alt;
    lightboxPhoto.index = e.target.index;
    caption.textContent = e.target.alt;
}

function closeGallery(e) {
    //Selectors to displayed
    document.querySelector('.galerie').style.display = "grid";
    document.querySelector('.jeux').style.display = "block";
    document.querySelector('.nav').style.display = "block";
    document.querySelector('.galerie__title').style.display = "block";
    //Selector to undisplay
    document.querySelector(".lightbox").style.display = "none";

}

/*
    nextPhoto take the index of the displayed image then increment it and test the new value to know if it's the last one so that if it's true it goes to the first one from the array.
    next step, change the value of the "img container" to display the new photo we get in the photo array with the updated id.
*/

function nextPhoto() {
    let id = lightboxPhoto.index;
    if (id + 1 >= photos.length)
        id = 0;
    else
        id += 1;
    lightboxPhoto.src = photos[id].src;
    lightboxPhoto.alt = photos[id].name;
    lightboxPhoto.index = id;

    caption.textContent = photos[id].name;
    

}
/*
    prevPhoto take the index of the displayed image then decrement it and test the new value to know if it's the first one so that if it's true it goes to the last one from the array.
    next step, change the value of the "img container" to display the new photo we get in the photo array with the updated id.
*/
function prevPhoto() {
    let id = lightboxPhoto.index;
    if (id-- < 0)
        id = photos.length - 1;
    else
        id--;
    
    lightboxPhoto.src = photos[id].src;
    lightboxPhoto.alt = photos[id].name;
    lightboxPhoto.index = id;

    caption.textContent = photos[id].name;

}