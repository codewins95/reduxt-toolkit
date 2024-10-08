import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/Slice';

const Home = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
  
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(increment(count+1))}>Increase</button>
        <button onClick={() => dispatch(decrement(count-1))}>Decrease</button>
      </div>
    );
}

export default Home