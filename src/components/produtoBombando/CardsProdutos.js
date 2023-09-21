import React from "react";

function CardsProdutos({img, titulo, descricao, preco}) {
    return (
        <div className="cardProdutos">
            <img src={img} alt={titulo}/>
            <h4>{titulo}</h4>
            <p>{descricao}</p>
            <p>{preco}</p>
        </div>
    )
}

export default CardsProdutos