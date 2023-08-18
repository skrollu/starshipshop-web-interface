import React from "react";
import ReactDOM from "react-dom/client";
import "./index.sass";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import store from "./config/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    </React.StrictMode>
);
