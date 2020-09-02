//trocar o texto da div
document.getElementById("saudacao").innerHTML = "Aiai2";
//atribuir a uma variável
let saudacao = document.getElementById("saudacao").innerText;
//alert(saudacao);
let imagem = document.getElementsByClassName("imgcompra").innerHTML;
console.log(imagem.attr("src"))

let login = document.getElementById("loginbtn");
let compra = document.getElementsByClassName("btncompra");

compra.onclick = () => {
   
    let imagem = document.getElementsByClassName("imgcompra").innerHTML;
    let descricao = document.getElementsByClassName("descricaocompra");
    login(imagem, descricao);

}

login.onclick = () => {
    login.style.background = 'red';
    if(usuario.length>0){
        document.getElementById("saudacao").innerHTML = `Olá, ${usuario[0].nome}!`;
        setTimeout(() => {
            window.location.href = "compra.html"
        },  2000);

    } else {
        alert("Login inválido!")
}
    

function login(imagem, descricao) {

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if(email.value.length == 0){
        alert("Por favor, insira seu e-mail.")
    }
    if(senha.value.length == 0){
        alert("Por favor, insira sua senha.")
    }

    let usuario = buscaUsuario(email, senha);
    

    
    }

    // //tentando inserir a imagem na página
    // var img = document.createElement("IMG");
    // img.setAttribute('src',imagem.attr("src"));
    // document.getElementById('produto').appendChild(img);
}


// compra
var	$input_quantidade	=	document.querySelector("#qtd");
var	$output_total	=	document.querySelector("#total");
$input_quantidade.oninput	=	function() {
var	preco	=	document.querySelector("#preco").textContent;
	preco	=	preco.replace("R$ ", "");
	preco	=	preco.replace(",",	".");
	preco	=	parseFloat(preco);
var	quantidade	=	$input_quantidade.value;
var	total	=	quantidade	*	preco;
	total	=	"R$	"	+	total.toFixed(2)
	total	=	total.replace(".",	",");
	$output_total.value	=	total;
}

function buscaUsuario(email, senha){
let usuarios = [{nome: "Karine", email: "karine@karinemail.com", senha: "karinesenha"},
{nome: "Maria Clara", email: "mariaclara@mariaclaramail.com", senha: "mariaclarasenha"},
{nome: "Luis Felipe", email: "luisfelipe@luisfelipemail.com", senha: "luisfelipesenha"},
{nome: "Wenny", email: "wenny@wennymail.com", senha: "wennysenha"},
{nome: "Thiago", email: "thiago@thiagomail.com", senha: "thiagosenha"}];

return usuarios.filter(function(usuario){return usuario.email == email && usuario.senha == senha})

}

