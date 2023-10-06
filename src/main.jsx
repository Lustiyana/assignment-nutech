import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Toast from "./components/Toast/Toast";
import "./index.css";
import store from "./redux/store";
import Root from "./routes/root";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Root />
    <Toast />
  </Provider>
);
