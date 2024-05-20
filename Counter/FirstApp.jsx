import './index.js'
import PropTypes from 'prop-types';
import { useState } from 'react';
import Counter from './componets/Counter.jsx';
const title = 'First app'; 

const FirstApp = ({}) =>{

    return(
        <>
         <h1>Counter</h1>
         <Counter/>
         
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