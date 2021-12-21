export const BotaoConclui = () => {
    const botaoConclui = document.createElement('button')

    BotaoCoclui.classList.add('Check-button')
    botaoConclui.innerText = 'concluir'

    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui
}

 const concluirTarefa = (evento) => {
    const botaoConclui = evento.target

    const tarefaCompleta = cotaoConclui.parentElement

    tarefaCompleta.classList.toggle('done')
}
