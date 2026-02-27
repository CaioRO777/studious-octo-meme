import React, { useState } from 'react';

function Diasdasemana() {
    // 1. Criando as "memórias" (estados) do nosso componente
    // numeroDigitado: guarda o que o usuário digita no input
    const [numeroDigitado, setNumeroDigitado] = useState('');
    
    // resultado: guarda a mensagem que vai aparecer na tela
    const [resultado, setResultado] = useState('');

    function verificar_dia() {
        let dias_semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
        
        // Convertendo o estado do input para número
        let diasUsuario = Number(numeroDigitado); 

        // Verificando a condição
        if (diasUsuario >= 1 && diasUsuario <= 7) {
            let diaEscolhido = dias_semana[diasUsuario - 1];
            
            // Em vez de alert(), usamos setResultado() para atualizar a tela
            setResultado(`O dia da semana é: ${diaEscolhido}`);
        } else {
            // Atualizamos a tela com a mensagem de erro
            setResultado("Erro: Por favor, digite um número válido entre 1 e 7.");
        }
    }

    return (
        <div>
            <h2 className='dias-semana'>Dias da Semana</h2>
            
            {/* 2. O input onde o usuário digita */}
            <input 
                type="number" 
                placeholder="Ex: 1 para Domingo" 
                value={numeroDigitado}
                onChange={(evento) => setNumeroDigitado(evento.target.value)} 
            />
            
            <button onClick={verificar_dia}>Verificar</button>

            {/* 3. Mostrando o resultado na tela */}
            <p>{resultado}</p>
        </div>
    );
}

export default Diasdasemana;