// Função retornando conteudo com sintaxe JSX, não necessita novo import do React-DOM ou React.
export default function Primeiro() {
    // Para utilizar conteúdo de const, var ou let, deve ser utilizar { msg } no nosso Html.
    const msg = 'Seja bem vindo ao nosso app React!';
    return (
        <h2>
            Primeiro Compoente!
            <p>{msg}</p>
        </h2>
    );
}
