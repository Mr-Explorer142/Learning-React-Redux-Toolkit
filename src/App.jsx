import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  reset,
} from "./features/counter/counterSlice";
import { useRef } from "react";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  // const [amount, setAmount] = useState(0);
  const amountRef = useRef(0);

  const handleIncrementClick = () => {
    dispatch(increment());
  };

  const handleDecrementClick = () => {
    dispatch(decrement());
  };

  const handleResetClick = () => {
    dispatch(reset());
  };

  const handleIncrementByAmountClick = () => {
    dispatch(incrementByAmount(Number(amountRef.current.value)));
  };

  const handleDecrementByAmountClick = () => {
    dispatch(decrementByAmount(Number(amountRef.current.value)));
  };

  return (
    <>
      <div className="my-container flex flex-col gap-3 justify-center h-screen items-center rounded-2xl">
        <button
          onClick={handleIncrementClick}
          className="border-2 hover:bg-amber-500 hover:text-white px-10 py-3 rounded-2xl text-2xl cursor-pointer bg-amber-200"
        >
          +
        </button>
        <h1 className="text-4xl font-bold text-amber-600 p-10 text-center">
          Count : {count}
        </h1>
        <button
          onClick={handleDecrementClick}
          className="border-2 hover:bg-amber-500 hover:text-white px-10 py-3 rounded-2xl text-2xl cursor-pointer bg-amber-200"
        >
          -
        </button>
        <button
          onClick={handleResetClick}
          className="mt-6 border-2 hover:bg-amber-500 hover:text-white px-10 py-3 rounded-2xl text-2xl cursor-pointer bg-amber-200"
        >
          Reset
        </button>
        <input
          type="number"
          ref={amountRef}
          // value={amount}
          // onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="my-6 border-2 border-amber-500 p-3 rounded-2xl font-bold text-xl text-center"
        />
        <button
          onClick={handleIncrementByAmountClick}
          className="border-2 hover:bg-amber-500 hover:text-white px-10 py-3 rounded-2xl text-2xl cursor-pointer bg-amber-200"
        >
          Increment by Amount
        </button>
        <button
          onClick={handleDecrementByAmountClick}
          className="mt-5 border-2 hover:bg-amber-500 hover:text-white px-10 py-3 rounded-2xl text-2xl cursor-pointer bg-amber-200"
        >
          Decrement by Amount
        </button>
      </div>
    </>
  );
}

export default App;
