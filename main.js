
const listaDeTeclas = document.querySelectorAll(".tecla");

function tocaSom(idDoSom) {
	document.querySelector(idDoSom).play();
}

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const idDoSom = listaDeTeclas[contador].innerHTML
    const tecla = listaDeTeclas[contador]

	listaDeTeclas[contador].onclick = function () {
        tocaSom(`#som_tecla_${idDoSom}`);
    };

    tecla.onkeydown = function (event) {
        if(event.code === "Space" || event.code === "Enter"){
            tecla.classList.add('ativa');
        }
	}

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
	}


}
