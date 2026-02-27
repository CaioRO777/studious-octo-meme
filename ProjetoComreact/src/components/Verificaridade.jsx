import React from 'react'
function verifica() {
    let idade = Number(prompt("Digite sua idade (Em Número) :"))

    if (idade > 18) {
        alert("Você é maior de Idade!! 👴👴")
    } else {
        alert("Você é menor de Idade!! 👶👶")
    }
}
function Verificaridade() {
  return (
    <div>
      <h2 className='idade'>Idade</h2>
      <button onClick={verifica}>Verificar</button>
    </div>
  )
}

export default Verificaridade
