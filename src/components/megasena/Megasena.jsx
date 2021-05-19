/* eslint-disable no-loop-func */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import './Megasena.css'

export default (props) => {
    //
    const [numero, setNumero] = useState(6);
    const [mega, setMega] = useState([]);
    //
    const gerarNumeros = (quantidade) => {
        const min = 1;
        const max = 60;
        const mega = [];
        //
        for (let index = 0; index < quantidade; index++) {
            let isExists = true;
            while (isExists) {
                var NrSorteado = Math.floor(Math.random() * ((max - min) + 1) + min);
                if (mega.find(nrMega => nrMega === NrSorteado) === undefined) {
                    isExists = false;
                }
            }
            mega.push(NrSorteado);
        }        
        // Números sorteados em ordem crescente.
        setMega(mega.sort((n1, n2) => n1 - n2));
    };
    const setQtNumeros = (e) => setNumero(+e.target.value)
    //
    return (
        <div className="Mega">
            <h1>Sorteio Mega-Sena</h1>
            <div>
                <h3>Números Sorteados</h3>
                <span className="Sorteado">{mega.join(' ')}</span>
            </div>
            <div>
                <label htmlFor="numeros">Quantidade de Números</label>
                <input type="number" id="numeros" 
                        value={numero}
                        onChange={(e) => {
                                setQtNumeros(e);
                                gerarNumeros(numero);
                            }
                        }
                 />
                <button onClick={_ => gerarNumeros(numero) }>
                    Sorteio
                </button>
            </div>
        </div>
    );
};