import './index.js'
import PropTypes from 'prop-types';
import { useState } from 'react';

const title = 'First app'; 

const FirstApp = ({value}) =>{

    const [counter, setCounter] = useState (value)
    
    const handleAdd = () => {
        setCounter (counter + 1)
    }

    const handleSubstract = () => {
        setCounter (counter - 1)
    }
    
    const handleReset = () => {
        setCounter (value)
    }
    return(
        <>
         <h1>Counter</h1>
         <span> {counter} </span>
         <button onClick={ () => handleAdd()}> +1</button>
         <button onClick={ () => handleSubstract()}> -1</button>
         <button onClick={ () => handleReset()}> Reset</button>
       </>   
    )
   
}



FirstApp.propTypes = {
    title: PropTypes.string.isRequired, // Establece si un vaor es obligatorio o no.
    sum: PropTypes.number.isRequired

}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    sum: 300
}


export default FirstApp; 