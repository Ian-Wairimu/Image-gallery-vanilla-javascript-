const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const galleryImage = document.querySelectorAll(".gallery-img");
let currentlySelected = 0

prevBtn.addEventListener('click', () => {
//prev button and next button
galleryImage[currentlySelected].classList.remove("active");
currentlySelected--; //currentlySelected = currentlySelecte - 1

galleryImage[currentlySelected].classList.add("active");
nextBtn.disabled = false;

if(currentlySelected === 0){
    prevBtn.disabled = true;
}
});

nextBtn.addEventListener('click', () => {
    galleryImage[currentlySelected].classList.remove("active");
    currentlySelected++; //currently selected = currentlySelected + 1

    galleryImage[currentlySelected].classList.add("active")
    prevBtn.disabled = false

    if(galleryImage.length === currentlySelected + 1){
        nextBtn.disabled = true;
    }
});