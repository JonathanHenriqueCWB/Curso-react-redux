import React from "react";
import Primeiro from './components/basicos/Primeiro'
import Parametro from './components/basicos/ComponenteComParametro'
import Fragment from './components/basicos/Fragment'

function App() {
    return(
        <>
            <h1>Fundamentos de React</h1>
            <Fragment erro='Adjacent JSX elements must be wrapped in an enclosing tag' />
            <Parametro 
                titulo='Segundo Componente'
                subtitulo='Os parametros são passados na chamada, por meio de propriedades' />
            <Primeiro />
        </>
    )
}

export default App