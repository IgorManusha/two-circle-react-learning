import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { Provider } from "react-redux";
import { store } from "./store/store";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
const contextValue = "Hello Igor Manusha Middle Frontend Developer";

root.render(
  <Provider store={store}>
    <AuthContext.Provider value={contextValue}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </AuthContext.Provider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
