/* eslint-disable import/no-anonymous-default-export */
import './Card.css'
import React from 'react'

export default (props) => {
    console.log(props);
    const {titulo, children, color} = props;
    // Recebendo estoilo Css por parâmetro para passar para o Style do componente Card.
    const cardStile = {
        backgroundColor : color || '#F00',
        borderColor : color || '#F00'
    };
    return (
        <div className="Card" style={cardStile}>
            <div className="Title">{titulo}</div>
            <div className="Content">
                {children}
            </div>
        </div>
    )
}