function leftB() {
    event.preventDefault();

    document.getElementById('left').style.width = "95%";
    document.getElementById('right').style.width = "5%";
    document.getElementById('vip').style.display = "none";
    document.getElementById('vil').style.display = "flex";
}
function bothB() {
    event.preventDefault();
    document.getElementById('left').style.width = "50%";
    document.getElementById('right').style.width = "50%";
    document.getElementById('vip').style.display = "flex";
    document.getElementById('vil').style.display = "flex";
}
function rightB() {
    event.preventDefault();
    document.getElementById('left').style.width = "5%";
    document.getElementById('right').style.width = "95%";
    document.getElementById('vil').style.display = "none";
    document.getElementById('vip').style.display = "flex";
}