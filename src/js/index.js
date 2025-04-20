const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let fotoAtual = 0;
const fotos = document.querySelectorAll(".foto-do-dadu");

btnAvancar.addEventListener("click", function() {
    if (fotoAtual === fotos.length - 1) return;

    esconderFotoSelecionada();

    fotoAtual++;

    mostrarFoto(fotoAtual);   
});

btnVoltar.addEventListener("click", function () {
    if (fotoAtual === 0) return;

    esconderFotoSelecionada();

    fotoAtual--;

    mostrarFoto(fotoAtual);
});


function esconderFotoSelecionada() {
    const fotoSelecionado = document.querySelector(".selecionada");
    fotoSelecionado.classList.remove("selecionada");
}

function mostrarFoto(fotoAtual) {
    fotos[fotoAtual].classList.add("selecionada");
  }