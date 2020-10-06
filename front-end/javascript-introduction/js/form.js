var botaoAdicionarPaciente = document.querySelector('#adicionar-paciente');

botaoAdicionarPaciente.addEventListener('click', function (event) {
  event.preventDefault();
  
  var form = document.querySelector('#form-adiciona');

  var paciente = obtemPacienteDoFormulario(form);

  var erros = verificaPacienteInvalido(paciente);

  if (erros.length > 0) {
    exibeMensagemDeErro(erros);

    console.log('teste');
    return;
  }
  
  adicionaPacienteNaTabela(paciente);

  form.reset();

  var mensagensErro = document.querySelector('#mensagens-erro');

  mensagensErro.innerHTML = '';
});

function adicionaPacienteNaTabela(paciente) {
  var pacienteTr = montaTr(paciente);

  var tabela = document.querySelector('#tabela-pacientes');

  tabela.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome    : form.nome.value,
    peso    : form.peso.value,
    altura  : form.altura.value,
    gordura : form.gordura.value,
    imc     : calculaImc(form.peso.value, form.altura.value),
  };

  return paciente;
}

function montaTr(paciente) {
  var pacienteTr = document.createElement('tr');

  pacienteTr.classList.add('paciente');
  
  var nomeTd    = montaTd(paciente.nome, 'info-nome');;
  var pesoTd    = montaTd(paciente.peso, 'info-peso');;
  var alturaTd  = montaTd(paciente.altura, 'info-altura');;
  var gorduraTd = montaTd(paciente.gordura, 'info-gordura');;
  var imcTd     = montaTd(paciente.imc, 'info-imc');;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr;
}

function montaTd(text, classe) {
  var td = document.createElement('td');
  td.textContent = text;
  td.classList.add(classe);

  return td;
}

function verificaPacienteInvalido(paciente) {
  var erros = [];
  
  if (paciente.nome.length == 0) {
    erros.push('O nome não pode ser em branco');
  }

  if (!validaPeso(paciente.peso)) {
    erros.push('O peso é inválido');
  }

  if (!validaAltura(paciente.altura)) {
    erros.push('A altura é inválida');
  }

  if (paciente.gordura.length == 0) {
    erros.push('A gordura não pode ser em branco');
  }

  return erros;
}

function exibeMensagemDeErro(erros) {
  var ul = document.querySelector('#mensagens-erro');

  ul.innerHTML = '';

  erros.forEach(erro => {
    var li = document.createElement('li');

    li.textContent = erro;

    ul.appendChild(li);
  });
} 