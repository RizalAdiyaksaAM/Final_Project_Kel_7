import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { RouterList } from "./routes/RouterList";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";

const queryCourse = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NextUIProvider>
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryCourse}>
        <RouterList />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
  </NextUIProvider>
);
