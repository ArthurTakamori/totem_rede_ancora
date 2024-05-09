import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./scss/styles.scss";
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;
import "mingcute_icon/font/Mingcute.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
