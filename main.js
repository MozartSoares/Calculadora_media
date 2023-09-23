const form = document.getElementById('form_atividade')
const imgAprovado = '<img src="images/aprovado.png" alt="emoji festejando" />'
const imgReprovado = '<img src="images/reprovado.png" alt="emoji decepcionado" />'
const atividades = [] //arrays para armazenar as notas e atividades para tirar a média
const notas = []
const spanAprovado = '<span class="aprovado">Aprovado</span>'
const spanReprovado = '<span class="reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt('Digite a nota mínima'))

let linhas = '' //precisa estar no escopo global para ter seu valor resetado a cada evento do addEventListener

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    atualizaMedia()
})

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome')
    const inputNotaAtividade = document.getElementById('nota')

    if (atividades.includes(inputNomeAtividade.value)) { //includes é um atributo que retorna true ou false sobre o conteudo de uma array
        alert(`A atividade: ${inputNomeAtividade.value} já existe`);
    } else {
        atividades.push(inputNomeAtividade.value) //atributo push insere o conteúdo desejado na array
        notas.push(parseFloat(inputNotaAtividade.value)) //parsefloat para tornar em type number que pode ser inteiro ou não
    
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>` //operador ternário $=if :=else
        linha += `</tr>`
    
        linhas += linha
    }

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody') //substituimos o tbody pela let linhas dentro do HTML 
    corpoTabela.innerHTML = linhas
}

function atualizaMedia() {
    const mediaFinal =  calculoMedia()

    document.getElementById('media-final').innerHTML = mediaFinal.toFixed(2)//atributo tofixed limita numero de casas decimais
    document.getElementById('resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado

}

function calculoMedia() {
    let somaNotas = 0

    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i];
    }

    return somaNotas / notas.length
}
