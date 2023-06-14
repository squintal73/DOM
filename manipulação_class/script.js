var caixa = document.getElementById("caixa");
var log = document.getElementById("caixa-log");
var cx, cy, logx, logy;

caixa.addEventListener("mousedown", iniciaArraste);
document.addEventListener("mouseup", terminaArraste);

function setPos(x,y) {
    caixa.style.top = y + "px";
    caixa.style.left = x + "px";
}

function setPosLog(x,y) {
    logy = caixa.style.top = y + "px";
    logx = caixa.style.left = x + "px";
}

function iniciaArraste(evt) {
    cx = evt.clientX - pxParaNum(caixa.style.left);
    cy = evt.clientY - pxParaNum(caixa.style.top);
    caixa.classList.add("arrastando");
    document.addEventListener("mousemove", arrasta);
}

function terminaArraste(evt) {
    caixa.classList.remove("arrastando");
    document.removeEventListener("mousemove", arrasta);
}

function arrasta(evt) {
    var x = evt.clientX;
    var y = evt.clientY;
    setPos(x - cx, y - cy);
    setPosLog(x - cx, y - cy);
    document.getElementById("log").textContent = logy + " - " + logx;
}

function pxParaNum(s) {
    return +(s.replace("px", ""));
}