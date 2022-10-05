let galleryImg = document.querySelectorAll(".clickable-img");
const largeGallery = document.querySelector(".large-gallery");
let activeImg = document.getElementById("active-img");
const nav =  document.getElementById("navbar")
const open = document.getElementById("open")
const close = document.getElementById("close")
let links = document.querySelectorAll(".link")

//open large image gallery
 if (galleryImg) {
     galleryImg.forEach(img => {
         img.addEventListener("click", () => {
            activeImg.src = img.src;
            largeGallery.classList.add("active");
         }) 
    });
 }

 if (largeGallery) {
     largeGallery.addEventListener('click', () => {
         largeGallery.classList.remove('active');
     })
 }


 //open mobile side menu
 if (open) {
     open.addEventListener('click', () => {
         nav.classList.add("opened");
     })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('opened');
    })
}

if(links) {
    links.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove("opened");
        })
    })
}