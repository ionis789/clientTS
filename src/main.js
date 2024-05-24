import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from "react-dom/client";
import App from "./App/App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(Provider, { store: store, children: _jsx(App, {}) }));
