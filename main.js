const listaDeTeclas = document.querySelectorAll('input[type=button]');
// console.log(listaDeTeclas);
const exibirTecla = document.querySelector('input[type=tel]');


    for (let contador = 0; contador < listaDeTeclas.length; contador++) {
        
        const tecla = listaDeTeclas[contador];
    
        tecla.onclick = function() {
            exibirTecla.value = exibirTecla.value + tecla.value;
        }
        
    }
