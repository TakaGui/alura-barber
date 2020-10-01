var titulo = document.querySelector('.titulo');
var pacientes = document.querySelectorAll('.paciente');

titulo.textContent = "Aparecida Nutricionista";

pacientes.forEach(paciente => {
  var tdPeso = paciente.querySelector('.info-peso');
  var peso = tdPeso.textContent;
  
  var tdAltura = paciente.querySelector('.info-altura');
  var altura = tdAltura.textContent;
  
  var tdImc = paciente.querySelector('.info-imc');
  
  var pesoValido = true;
  var alturaValida = true;
  
  if ((peso <= 0) || (peso >= 1000)) {
    pesoValido = false;
    tdImc.textContent = 'Peso inválido';
    paciente.classList.add('paciente-invalido');
  }
  
  if ((altura <= 0) || (altura >= 3.00)) {
    alturaValida = false;
    tdImc.textContent = 'Altura inválida';
    paciente.classList.add('paciente-invalido');
  }
  
  if (pesoValido && alturaValida) {
    var imc = calculaImc(peso, altura);
  
    tdImc.textContent = imc;
  }
});

function calculaImc(peso, altura) {
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}