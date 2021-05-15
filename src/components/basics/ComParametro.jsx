// Componente com recebimento de parametros, para utilização na view do componente React.
export default function ComParametro(props) {
    // Extração dos parametros para constantes.
    const { titulo, subtitulo, aluno, nota } = props;
    const status = nota >= 7 ? 'Aprovado' : 'Reprovado';
    return (
        <div>
            <h2>{titulo}</h2>
            <h3>{subtitulo}</h3>
            <p>{aluno} Tem nota {nota} e esta {status}!</p>
        </div>
    );
}