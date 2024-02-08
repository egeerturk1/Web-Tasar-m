let filterBlur = document.querySelector("#blur");
let filterContrast = document.querySelector("#contrast");
let filterHue = document.querySelector("#hue-rotate");
let filterSepia = document.querySelector("#sepia");

let noFlipBtn = document.querySelector("#no-flip");
let flipXBtn = document.querySelector("#flip-x");
let flipYBtn = document.querySelector("#flip-y");

let uploadButton = document.querySelector("#upload-button");
let image = document.querySelector("#chosen-image");

const resetFilter = () => {
    filterBlur.value = "0";
    filterContrast.value = "100";
    filterHue.value = "0";
    filterSepia.value = "0";
    noFlipBtn.checked = "true"

    addFilter();
    flipImage();
}

uploadButton.onchange = () => {
    resetFilter();
    document.querySelector(".image-container").style.display = "block";

    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        image.setAttribute("src", reader.result);
    }
}

const addFilter = () => {
    image.style.filter = `blur(${filterBlur.value}px)
    contrast(${filterContrast.value}%)
    hue-rotate(${filterHue.value}deg)
    sepia(${filterSepia.value}%)
    `
}

let sliders = document.querySelectorAll(".filter input[type ='range']")

sliders.forEach(slider => {
    slider.addEventListener("input", addFilter)
})

let radioBtns = document.querySelectorAll(".flip-option input[type='radio']");

const flipImage = () => {
    if(flipXBtn.checked){
        image.style.transform = "scaleX(-1)";
    }else if(flipYBtn.checked){
        image.style.transform = "scaleY(-1)";
    }else{
        image.style.transform = "scale(1,1)";
    }
}
radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener("click",flipImage);
})
