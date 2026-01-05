import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: true,
  duration: 2000,
  easing: "ease-out-cubic",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
