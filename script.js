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