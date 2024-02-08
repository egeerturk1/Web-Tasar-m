const container = document.querySelector(".container");
const userResult = document.querySelector(".user-images img");
const cpuResult = document.querySelector(".cpu-images img")
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option-image");

optionImages.forEach((image,index) => {
    image.addEventListener("click", (e) =>{
        image.classList.add("active");

        optionImages.forEach((img2,index2) => {
            if(index !== index2){
                img2.classList.remove("active");
            }
        })

        let imageSrc = e.target.querySelector("img").src;
        userResult.src = imageSrc;

        let randomNumber = Math.floor(Math.random() * 3);
        

        let cpuImages = ["img/rock.png","img/paper.png","img/scissors.png"];

        cpuResult.src = cpuImages[randomNumber];

        let cpuValue = ["R","P","S"][randomNumber];
        let userValue = ["R","P","S"][index];

        let outcomes = {
            RR: "Berabere",
            RP : "Bilgisayar",
            RS : "Kullanıcı",
            PP : "Berabere",
            PR : "Kullanıcı",
            PS : "Bilgisayar",
            SS : "Berabere",
            SR : "Bilgisayar",
            SP : "Kullanıcı",
        };
        let outcomeValue = outcomes[userValue+cpuValue];
        result.textContent = userValue === cpuValue ? "Berabere" : `${outcomeValue} Kazandı`;
    })
})