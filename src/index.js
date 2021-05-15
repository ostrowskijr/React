// Import do react-dom que serve para interagirmos com o DOM do documento HTML.
import ReactDOM from 'react-dom';
import App from './App'
// Importando arquivo css
import './index.css'
// Recuperando o elemento do html com Id=root.
const element = document.getElementById('root');

// Criar const com tag Html
const nome = <strong>Bem Vindo ao React: Ostrowskijr.</strong>;

// Setar o texto 'Olá React!' no elemento da página
// Podemos utilizar código html para renderizar dentro da página, utilizando a sintaxe JSX, para utilizar
// precisamos importar React(Acredito que nas versões mais recentes do React não seja mais necessário.)
ReactDOM.render(
    <App nome={nome}/>
    ,
    element
);