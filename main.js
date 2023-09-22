const form = document.getElementById('form_atividade')
const imgAprovado = '<img src="images/aprovado.png" alt="emoji festejando" />'
const imgReprovado = '<img src="images/reprovado.png" alt="emoji decepcionado" />'

let linhas = '' //precisa estar no escopo global para ter seu valor resetado a cada evento do addEventListener

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const inputNomeAtividade = document.getElementById('nome')
    const inputNotaAtividade = document.getElementById('nota')

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>` //operador ternário $=if :=else
    linha += `</tr>`

    linhas += linha

    const corpoTabela = document.querySelector('tbody') //substituimos o tbody pela let linhas dentro do HTML 
    corpoTabela.innerHTML = linhas

    alert(`Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value}`)

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
})