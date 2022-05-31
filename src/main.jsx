import React from "react";
import ReactDOM from "react-dom/client";
// import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import './styles/global.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SignIn />
  </React.StrictMode>
);
