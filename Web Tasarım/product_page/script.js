let productNumber = document.querySelector(".product-number");
let addProduct = document.querySelectorAll("#add-product");
let removeProduct = document.querySelectorAll("#remove-product");

let number = 0;


for (let i = 0; i < addProduct.length; i++) {
    addProduct[i].addEventListener("click", () => {
        number++;
        productNumber.innerHTML = number;
    });
}

for (let i = 0; i < removeProduct.length; i++) {
    removeProduct[i].addEventListener("click", () => {
        if (number > 0) {
            number--;
            productNumber.innerHTML = number;
        }
    });
}
