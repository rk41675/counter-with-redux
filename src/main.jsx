import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// Import the Redux store and the Provider component to supply the store to the app
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*Wrap the app with Provider to make the store available to all components*/}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
