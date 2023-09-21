import React from "react";
function Card({img, titulo}) {
    return (
        <div className="card">
            <img src={img} alt={titulo}/>
            <h2>{titulo}</h2>
        </div>
    )
}

export default Card