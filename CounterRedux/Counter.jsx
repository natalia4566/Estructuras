import React, { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './actions'; 

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter); 

  const handleIncrement = () => {
    dispatch(increment(5)); 
  };

  const handleDecrement = () => {
    dispatch(decrement()); 
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
