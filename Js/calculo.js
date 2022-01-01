let calcular = document.getElementById('calcular');

function calculo (){
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let resultado = document.getElementById('resultado');
    let classificacao ='';

  imc = (peso / (altura * altura)).toFixed(1);

  if (imc <= 18.5) {
    classificacao = 'Abaixo do Peso!';
  }
  else if (imc <= 24.9) {
    classificacao = 'Normal, parabéns!!!';
 }
  else  if (imc <= 29.9) {
    classificacao = 'Atenção!! Sobrepeso';
 }
  else  if (imc <= 34.9) {
    classificacao = 'Cuidado!! Obesidade Grau I';
 }
  else  if (imc < 39.9) {
    classificacao = 'Cuidado!! Obesidade Grau II';
 }
  else if (imc < 18.5) {
    classificacao = 'Cuidado!! Obesidade Grau 3';
 }
 else{
     classificacao = 'Verifique se inseriu todos os dados'
 }
 resultado.textContent = `${nome}, seu IMC é: ${imc} e você está ${classificacao}`;

}

calcular.addEventListener('click', calculo);