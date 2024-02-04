var genislik = document.querySelector("#genislik");
var yukselik = document.querySelector("#yukseklik");
var arka_renk = document.querySelector("#arka_renk");
var kalinlik = document.querySelector("#kalinlik");
var tip = document.querySelector("#tip");
var cerceve_renk = document.querySelector("#cerceve_renk");
var dis_bosluk = document.querySelector("#dis_bosluk");
var ic_bosluk = document.querySelector("#ic_bosluk");
var dondur = document.querySelector("#rotate");
var olustur = document.querySelector("#olustur");
var sag_taraf = document.querySelector(".sag");



olustur.addEventListener("click", function () {
    // sag_taraf.style.width = genislik.value + "px";
    // sag_taraf.style.height = yukselik.value + "px";
    // sag_taraf.style.backgroundColor = arka_renk.value;
    // sag_taraf.style.borderWidth = kalinlik.value;
    // sag_taraf.style.borderStyle = tip.value;
    // sag_taraf.style.borderColor = cerceve_renk.value;
    // sag_taraf.style.margin = dis_bosluk.value + "px";
    // sag_taraf.style.padding = ic_bosluk.value + "px";
    // sag_taraf.style.transform = "rotate(" + dondur.value + + "deg)";

    sag_taraf.style.cssText = `width:${genislik.value}px;
    height:${yukselik.value}px;
    background-color:${arka_renk.value};
    border-width:${kalinlik.value};
    border-style:${tip.value};
    border-color:${cerceve_renk.value};
    margin:${dis_bosluk.value};
    padding:${ic_bosluk.value};
    transform:rotate(+${dondur.value}+deg);
    `;
});