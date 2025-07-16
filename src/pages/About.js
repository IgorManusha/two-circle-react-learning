import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/counter/counterSlice";

const About = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter.value);
  console.log(counterValue);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByAmount = (amount) => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <div>
      <button onClick={() => navigate(+1)}>Forward</button>
      <h1>About</h1>
      <h1>{counterValue}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={() => handleIncrementByAmount(5)}>
        increment by amount
      </button>
    </div>
  );
};

export default About;
