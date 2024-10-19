import "./App.css";
import Navbar from "./components/Navbar";
// Importing the hooks to access the Redux store (useSelector) and dispatch actions (useDispatch)
import { useSelector, useDispatch } from "react-redux";

// Importing the action creators from the Redux counter slice for dispatching actions
import { decrement, increment, multiply } from "./redux/counter/counterSlice";

function App() {
  //Access the current value of counter from the Redux store
  const count = useSelector((state) => state.counter.value);

  //useDispatch() gives you access to the dispatch function, which is used to trigger actions that modify the state
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        Currently count is {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(multiply())}>*</button>
      </div>
    </>
  );
}

export default App;
