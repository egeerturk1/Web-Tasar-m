const inputs = document.querySelector(".inputs");
const resetBtn = document.querySelector(".reset-btn");
const hint = document.querySelector(".hint span");
const guessLeft = document.querySelector(".guess-left span");
const wrongLetter = document.querySelector(".wrong-letter span");
const answerInput = document.querySelector(".answer-input");

let words;
let incorrects = [];
let corrects = [];
let maxGuesses;

function randomWord() {
    let randObj = wordList[Math.floor((Math.random()) * wordList.length)];

    words = randObj.word;
    maxGuesses = 5;
    corrects = [];
    incorrects = [];

    hint.innerText = randObj.hint;

    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrects;

    let html = "";
    for (let i = 0; i < words.length; i++) {
        html += `<input type="text" disabled>`
    }
    inputs.innerHTML = html;
}

const initGame = e => {
    let key = e.target.value;

    if (key.match(/^[A-Za-z]+$/) && !incorrects.includes(key) && !corrects.includes(key)) {
        if (words.includes(key)) {
            for (let i = 0; i < words.length; i++) {
                if (words[i] === key) {
                    corrects.push(key);
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
            maxGuesses--;
            incorrects.push(` ${key}`);
        }
        guessLeft.innerText = maxGuesses;
        wrongLetter.innerText = incorrects;
    }
    answerInput.value = "";

    setTimeout(() => {
        if (corrects.length === words.length) {
            alert(`Tebrikler! Doğru cevabı buldunuz. Cevabınız: ${words.toUpperCase()}`);
            randomWord();
        }
        else if (maxGuesses < 1) {
            alert("Oyun bitti! Tahmin hakkınız kalmadı");

            for (let i = 0; i < words.length; i++) {
                inputs.querySelectorAll("input")[i].value = words[i];
            }
        }
    }, 200);

}

resetBtn.addEventListener("click", randomWord);
answerInput.addEventListener("input", initGame);
document.addEventListener("keydown", () => answerInput.focus());