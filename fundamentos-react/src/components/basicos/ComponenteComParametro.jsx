import React from "react";

// Propriedades/Argumentos vem do componente que o chama
// Deverá respeitar a nomeclatura
const ComponenteComParametro = props => {
    return (
        <div>
            <h3>{props.titulo}</h3>
            <p>{props.subtitulo}</p>
        </div>
    )
}

export default ComponenteComParametro