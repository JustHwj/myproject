import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import Modal from "react-modal";
import store from "./redux/store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
// Modal.setAppElement("#root");

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(
//    <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
//     );
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );