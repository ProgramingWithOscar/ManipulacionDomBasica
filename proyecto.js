const h1 = document.querySelector('h1');
const form = document.querySelector('#formulario');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');


form.addEventListener("submit", bntOnClick);  

function bntOnClick(event){
     console.log({event});
     event.preventDefault();
     const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
     pResult.innerHTML = "Resultado: " + sumaInputs;
}

input1.addEventListener("mousemove", mensaje);
function mensaje(){
     pResult.innerHTML = "Me tocaste";
}