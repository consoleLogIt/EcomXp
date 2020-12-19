import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import rootReducer from './reducers'

const store = createStore(rootReducer);
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <App store={store} />
    </PersistGate>
  </React.StrictMode>,
  document.getElementById("root")
);
