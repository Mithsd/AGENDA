const form = document.getElementById('form-contato');

const contatos = []
const numeros = []

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
});

function adicionarLinha() {
    const inputNome = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('numero-contato');

    contatos.push(inputNumero.value)
    numeros.push(parseFloat(inputNome.value))

    let linha = '<tr>'
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputNumero.value}</td>`
    linha += '</tr>'

    linhas += linha

    inputNumero.value = ''
    inputNome.value = ''
    
}

function atualizarTabela (){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}


