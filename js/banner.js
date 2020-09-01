var banners = ["img/Carrossel/01.jpg", "img/Carrossel/02.jpg", "img/Carrossel/03.jpg"];
var bannerAtual = 0;
function trocaBanner() {
    if(bannerAtual > 2){
        bannerAtual = 0;
    }
    document.querySelector('.banner-destaque img').src = banners[bannerAtual];
    bannerAtual = bannerAtual + 1;

}

document.getElementById("btn").onload = setInterval(trocaBanner, 4000);