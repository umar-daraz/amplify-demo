import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Amplify } from "aws-amplify";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import "./index.css";
import App from "./App";
import AppProductDetail from "./ui-components/AppProductDetail";
import reportWebVitals from "./reportWebVitals";
import awsExports from "./aws-exports";
import { AppFormCheckout } from "./ui-components";

Amplify.configure(awsExports);

ReactDOM.render(
  <React.StrictMode>
    <AmplifyProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/checkout" element={<AppFormCheckout />} />
          <Route path="/product/:productId" element={<AppProductDetail />} />
        </Routes>
      </BrowserRouter>
    </AmplifyProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
