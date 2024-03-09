import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"
import "./index.css";
import { AuthProvider } from "./context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <AuthProvider>
      <App />
    </AuthProvider>

    {/* </ThemeProvider> */}
  </React.StrictMode>
);