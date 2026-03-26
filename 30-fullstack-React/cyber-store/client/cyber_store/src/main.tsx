// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./app/styles/main.scss";
import { Provider } from "react-redux";
import store from "./app/store/store.ts";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
    <>
    <Provider store={store}>
      <App />
    </Provider>
    </>
  // </StrictMode>,
);
