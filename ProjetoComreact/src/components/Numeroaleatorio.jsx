import React from 'react'

function aleatorio() {
    let adivinha = Number(prompt("Digite seu palpite entre 1 e 10 (Em Número): "))
    
    // Verificação de erro: se for maior que 10
    if (adivinha > 10) {
        alert("Erro: Você digitou um número maior que 10. Tente novamente!")
        return // O return faz com que a função pare aqui e não rode o código abaixo
    }

    let num_aleatorio = Math.floor(Math.random() * 10) + 1

    if (adivinha === num_aleatorio) {
        alert("Parabéns, você acertou o Número secreto!!")
    } else {
        alert(`Errouuu!!! O número secreto era ${num_aleatorio}`)
    }
}

function Numeroaleatorio() {
    return (
        <div>
            <h2 className='numAleatorio'>Número Aleatório</h2>
            <button onClick={aleatorio}>Tentar</button>
        </div>
    )
}

export default Numeroaleatorio