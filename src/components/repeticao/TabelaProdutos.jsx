/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import produtos from '../../data/produtos'
import './TabelaProdutos.css'

export default (props) => {
    return (
        <div className="tableProdutos">
            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
                <tbody>
                    {

                        produtos.map((produto, index) => {
                            return (
                                <tr key={produto.id} border='0' className={index % 2 === 0 ? 'Par' : 'Impar'}>
                                    <td>{produto.id}</td>
                                    <td>{produto.nome}</td>
                                    <td>R$ {produto.preco}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};