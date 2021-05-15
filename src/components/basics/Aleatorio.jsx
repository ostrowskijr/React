/* eslint-disable import/no-anonymous-default-export */

export default (props) => {
    const {min, max} = props;
    const aleatorio = Math.floor(Math.random() * ((max - min) + 1) + min);
    //
    return (
        <div>
            <h2>Exercício - Número aleatório</h2>
            <p>Número Aleatório entre <strong>{min}</strong> e <strong>{max}</strong> é igual ao aleatório: <strong>{aleatorio}</strong></p>            
        </div>
    )
};