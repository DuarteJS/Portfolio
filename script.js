function idade() {
    const ano_aniversario = 2006; // ano aniversário
    const mes_aniversario = 9; // mes aniversário
    const dia_aniversario = 15; // dia aniversário

    let d = new Date(),
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),

        quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || (mes_atual == mes_aniversario && dia_atual < dia_aniversario)) {
        quantos_anos--;
    }

    const elementoIdade = document.querySelectorAll('.acrescentacao'); // MUDA ISSO AQ PRO NOME DA CLASSE DO <p></p> DE IDADE
    elementoIdade.textContent = 'Idade: ' + quantos_anos + ' anos';
}

function carregar_script() {
    idade()
}

window.addEventListener('load', carregar_script);

let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.querySelector("#icone-x")

function abrirFecharMenu() {

    // Se o menu está fechado
    if (menu.classList.contains("menu-fechado")) {
        // Abrir o menu
        menu.classList.remove("menu-fechado")

        // Mostrar icone X
        iconeX.style.display = "inline"

        // Esconder icone Barras
        iconeBarras.style.display = "none"

    } else {
        // Fechar o menu
        menu.classList.add("menu-fechado")

        // Esconder icone X
        iconeX.style.display = "none"

        // Mostrar icone Barras
        iconeBarras.style.display = "inline"
    }
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
}