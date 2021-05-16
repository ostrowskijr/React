<div align='center'>
    <img src="./public/logo192.png"/>
    <h1>Fundamentos React</h1>
</div>

## Sobre
Curso de React + Redux da Cod3r do instrutor Leonardo Leitão, modulo de fundamentos do React, 1° Modulo sobre fundamentos do framework.
#
## Indice
- [Criando o Projeto](#Criando-o-Projeto)
- [Primeiro Componente](#Primeiro-Componente])
- [Componente com Parâmetro](#Componente-com-Parâmetro)
- [Fragmento React](#Fragmento-React)
- [Desafio Aleatório](#Desafio-Aleatório)
- [Componentes Filhos](#Componentes-Filhos)
- [Repetições](#Repetições)
- [Desafio Table](#Desafio-Table)
- [Renderização condicional](#Renderização-condicional)
- [Comunição](#Comunição)
- [Componente com Estado](#Componente-com-Estado)
- [Componente Controlado](#Componente-Controlado)
- [Contador](#contador)
- [Dasafio Mega-Sena](#desafio-mega-sena)
#
### Criando o Projeto
```bash
    # Comando para criação do projeto React
    $ npx create nome_projeto

    # Após a criação executar projeto
    $ npm start
```
### Primeiro Componente

### Componente com Parâmetro

### Fragmento React

### Desafio Aleatório

### Componentes Filhos

### Repetições Laço

### Desafio Table

### Renderização condicional

### Comunição
- Direta 
    - Comunição direta ocorre com a passagem de parâmetros do componente pai para o componente filho via props, conforme exemplo abaixo:
        ```bash
        export default (props) => {
            return (
                <div>
                    <DiretaFilho nome='Luis' idade={34} bool={true}></DiretaFilho>
                    <DiretaFilho nome='Isadora' idade={6} bool={false}></DiretaFilho>
                </div>
            );
        };
        ```
- Indireta
    - Comunicação indireta consiste na passagem de informações de parâmetros do componente filho para o pai, está operação é realizada através da chamada de uma function do componente pai passada via props para o componente filho, conforme exemplo abaixo:
        ```bash
            // Função para receber dados enviados pelo componente filho    
            function enviarInformacoes(params){
                nome = params.nome;
                idade = params.idade;
                nerd = params.nerd;
            };

            // Passagem da função para o componente filho via props
            <IndiretaFilho infoPai={enviarInformacoes}/>
            
            // Chamada da função no componete filho
            export default (props) => {
                const {infoPai} = props;
                return (
                    <div>
                        <div>Filho</div>
                        <button onClick={ (e)=> infoPai({'nome': 'Luis', 'idade' : 34, 'nerd': true}) }>
                            Fornecer Info Pai
                        </button>
                    </div> 
                );
            };

        ```

### Componente com Estado
- Para realizar controle de estado em um componente React, devemos importar a Redux - useState, este redux tem a função de gerenciar o estado de um componente, conforme exemplo abaixo:
    ```bash
    import React, { useState } from 'react';
    
    /* useState seta estado do objeto, o mesmo retorna um array de 2 posições a 
       1-É o valor do dado e a 2-É o nome da função para setar o valor */
    const [nome, setNome] = useState('?');
    // Para setar o novo valor em nome utilizamos a função setNome
    setNome(params.nome);
    // Para apresentar o valor utilizamos a const nome.
    Nome: {nome}
    ```

### Componente Controlado

### Contador

### Dasafio Mega-Sena