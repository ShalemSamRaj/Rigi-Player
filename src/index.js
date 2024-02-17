import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
// import { thunk } from "redux-thunk";
import PlayVideoReducer from "./Reducers/PlayVideoReducer";
import { Provider } from "react-redux";

let store = createStore(PlayVideoReducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
