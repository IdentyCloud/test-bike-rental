import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Container from "@mui/material/Container";

import { store } from "./store";
import { Provider } from "react-redux";

import { I18nextProvider } from "react-i18next";
import i18n from "i18next";

import global_en from "./translations/en/global.json";
import global_es from "./translations/es/global.json";

import "./main.css";

i18n.init({
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Container>
            <App />
          </Container>
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);
