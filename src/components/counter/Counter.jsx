import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice.js'

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter: {count} </h2>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  )
};

export default Counter




