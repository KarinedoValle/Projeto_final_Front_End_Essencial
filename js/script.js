//Funcionando
function clicarLogin() {
    let login = document.getElementById("loginbtn");
    login.style.background = '#61adf5';
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let usuario = buscaUsuario(email, senha);

    if (usuario.length > 0) {
        document.getElementById("saudacao").innerHTML = `Olá, ${usuario[0].nome}!`;
        setTimeout(() => {
            window.location.href = "compra.html"
        }, 2000);

    } else {
        alert("Login inválido! Tente novamente.")
    }
}


//Funcionando
function buscaUsuario(email, senha) {
    let usuarios = [{ nome: "Karine", email: "karine@karinemail.com", senha: "karinesenha" },
    { nome: "Maria Clara", email: "mariaclara@mariaclaramail.com", senha: "mariaclarasenha" },
    { nome: "Luis Felipe", email: "luisfelipe@luisfelipemail.com", senha: "luisfelipesenha" },
    { nome: "Wenny", email: "wenny@wennymail.com", senha: "wennysenha" },
    { nome: "Thiago", email: "thiago@thiagomail.com", senha: "thiagosenha" }];

    return usuarios.filter(function (usuario) { return usuario.email == email && usuario.senha == senha })

}

//Funcionando
function clicarCompra(preco) {
    let compra = document.getElementById("btncompra");
    compra.style.background = '#61adf5';
    setTimeout(() => {
        window.location.href = "login.html"
    }, 2000);

    //Tentando usar o sessionStorage
    if (typeof (Storage) !== "undefined") {
        var img = document.getElementById("imgcompra");
        imgValor = img.value;
        window.sessionStorage.setItem('img', imgValor);
        var descricao = document.getElementById("descricaocompra");
        descValor = descricao.value;
        window.sessionStorage.setItem('descricao', descValor);
        window.sessionStorage.setItem('preco', preco);
    } else {
        alert("No Web Storage support!");
    }
    //

}


// compra
var $input_quantidade = document.querySelector("#qtd");
var $output_total = document.querySelector("#total");
$input_quantidade.oninput = function () {
    var preco = document.querySelector("#preco").textContent;
    preco = preco.replace("R$ ", "");
    preco = preco.replace(",", ".");
    preco = parseFloat(preco);
    var quantidade = $input_quantidade.value;
    var total = quantidade * preco;
    total = "R$	" + total.toFixed(2)
    total = total.replace(".", ",");
    $output_total.value = total;
}

