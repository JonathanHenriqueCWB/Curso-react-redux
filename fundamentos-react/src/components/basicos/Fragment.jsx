import React from 'react'

const Fragment = props => {
    return (
        <>
            <h3>Utilizando React fragment</h3>
            <p>As tags sempre deveram ser encapsuoladas por uma tag</p>
            <p>A utilização indiscriminada gerara um erro</p>
            <p>Adjacent JSX elements must be wrapped in an enclosing tag</p>
        </>
    )
}

const Fragment2 = props => {
    return(
        <React.Fragment>
            <h3>Utilizando React fragment</h3>
            <p>As tags sempre deveram ser encapsuoladas por uma tag</p>
            <p>A utilização indiscriminada gerara um erro</p>
            <p>{props.erro}</p>
        </React.Fragment>
    )
}

export default Fragment2

// As duas maneiras são validas, uma aceita receber propriedades e outra não