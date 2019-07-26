const galerie = document.querySelector('.galerie');
let img = document.createElement('img');


photos.forEach(photo => {
    let imgClone = img.cloneNode();
    imgClone.src = photo.src;
    imgClone.alt = photo.name;

    galerie.appendChild(imgClone);
})

