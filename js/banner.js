var banners = ["img/ELETRODOM/ELETRODOM/fogao_dako.jpg", "img/ELETRODOM/ELETRODOM/geladeira_brastempo.jpg", "img/ELETRODOM/ELETRODOM/liquidificador_reverse.jpg", "img/ELETRODOM/ELETRODOM/mixer_wallita.jpg"];
var bannerAtual = 0;
function trocaBanner() {
    if(bannerAtual > 3){
        bannerAtual = 0;
    }
    document.querySelector('.banner-destaque img').src = banners[bannerAtual];
    bannerAtual = bannerAtual + 1;

}

document.getElementById("btn").onload = setInterval(trocaBanner, 4000);