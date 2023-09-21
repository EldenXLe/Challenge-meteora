import './BuscaCategoria.css';
import React from 'react';
import Cards from './Cards';

function BuscaCategoria ({ cards }) {
    return (
        <div className='buscaPorCategoria'>
            <h1>Busca por Categoria</h1>
            <div className='cardCategoria'>
                {cards.map((card, index) => (
                    <Cards key={index} titulo={card.titulo} img={card.img}/>
                ))}
            </div>
        </div>
    )
}

export default BuscaCategoria