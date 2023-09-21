import "./Produtos.css";
import React from "react";
import CardsProdutos from "./CardsProdutos";

function Produtos ({ cardsProd }) {
    return(
        <div className="produtos">
            <h3>Produtos que estão bombando!</h3>
            <div className="cardProdutos">
                {cardsProd.map((cardprod, prod) => (
                    <CardsProdutos key={prod} img={cardprod.img} titulo={cardprod.titulo} descricao={cardprod.descricao} preco={cardprod.preco}/>
                ))}
            </div>
        </div>
    )
}

export default Produtos