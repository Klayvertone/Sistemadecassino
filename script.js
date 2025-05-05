let saldo = 100;
let rodada = 0;

function jogar() {
    const apostaInput = document.getElementById("aposta");
    const mensagem = document.getElementById("mensagem");
    let aposta = parseFloat(apostaInput.value);

    if (isNaN(aposta) || aposta <= 0 || aposta > saldo) {
        mensagem.innerText = "Aposta inválida.";
        return;
    }

    rodada++;
    saldo -= aposta;

    let ganhou = false;

    if (rodada <= 3) {
        // Primeiras 3 rodadas: 100% de chance de ganhar 60% do valor
        ganhou = true;
        saldo += aposta + (aposta * 0.6);
        mensagem.innerText = `Você ganhou R$${(aposta * 0.6).toFixed(2)}!`;
    } else {
        // Depois: perde sempre
        ganhou = false;
        mensagem.innerText = `Você perdeu R$${aposta.toFixed(2)}!`;
    }

    document.getElementById("saldo").innerText = saldo.toFixed(2);

    if (saldo <= 0) {
        mensagem.innerText += " Você ficou sem saldo!";
    }

    apostaInput.value = "";
}
