var buttons = document.getElementsByClassName("akordiyon");
var ok = document.getElementsByClassName("fa-arrow-down");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var panel = this.nextElementSibling;
        this.lastElementChild.classList.toggle("fa-arrow-up")
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }

}