'use strict';

// fill fields function
const preencherForm = (endereco) => {
	document.getElementById('endereco').value = endereco.logradouro;
	document.getElementById('bairro').value = endereco.bairro;
	document.getElementById('cidade').value = endereco.localidade;
	document.getElementById('estado').value = endereco.uf;
}

// clear fields function
const limparCampos = () => {
	document.getElementById('bairro').value = ''
	document.getElementById('cidade').value = ''
	document.getElementById('estado').value = ''
}

// cep is valid? function
const cepValido = (cep) => cep.length == 8 && /^[0-9]+$/.test(cep);


// search cep function
const pesquisarCep = async() => {
	const cep = document.getElementById('cep').value;
	const url = `http://viacep.com.br/ws/${cep}/json/`;
	// const loader = document.getElementById('loading')
	
	if(cepValido(cep)){
		// fetching data from API
		const dados = await fetch(url);
		const endereco = await dados.json()
		
		if(endereco.hasOwnProperty('erro')){
			console.log(endereco)
			document.getElementById('endereco').value = 'erro! CEP não encontrado!'
			limparCampos()
		}else {
				preencherForm(endereco);
		}
	}else{
		document.getElementById('endereco').value = 'erro! CEP inválido'
		limparCampos()
	}
	
}
