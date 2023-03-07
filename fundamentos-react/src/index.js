// ReactDOM
import ReactDOM from 'react-dom'
// Import Reacto para utilização do JSX
import React from 'react'
// Import CSS
import './index.css'
// Primeiro compnente
import Primeiro from './components/basicos/Primeiro'

// Usando o react dom para renderizar conteúdo
// É obrigatório a importação do React para utilzação do JSX
// JSX Também pode ser atribuido a uma variável
ReactDOM.render(
    <Primeiro />,
    document.getElementById('root')
)