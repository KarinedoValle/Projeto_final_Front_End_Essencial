var banners = ["img/ELETRODOM/ELETRODOM/fogao_dako.jpg", "img/ELETRODOM/ELETRODOM/geladeira_brastempo.jpg", "img/ELETRODOM/ELETRODOM/liquidificador_reverse.jpg", "img/ELETRODOM/ELETRODOM/mixer_wallita.jpg"];
var bannerAtual = 0;
function trocaBanner() {
    bannerAtual = bannerAtual + 1;
    document.querySelector('.banner-destaque img').src = banners[bannerAtual];

    if(bannerAtual == 3){
        bannerAtual = 0;
    }
}

setInterval(trocaBanner, 4000);

var timer = setInterval(trocaBanner, 4000);
var controle = document.querySelector('.pause');

document.getElementById("btn").onload = setInterval(trocaBanner, 4000);

controle.onclick = function () {
    if (controle.className == 'pause') {
        clearInterval(timer);
        controle.className = 'play';
    } else if (controle.className == 'play') {
        timer = setInterval(trocaBanner, 4000);
        controle.className = 'pause';
    }
    return false;
};