import './index.js'
import PropTypes from 'prop-types';

import Counter from './componets/Counter.jsx';
import multipleCustom from './Hooks/multipleCustom.jsx';
const title = 'First app'; 

const FirstApp = ({}) =>{

    return(
        <>
         <h1>Counter</h1>
         <Counter/>
         <multipleCustom/>
         
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