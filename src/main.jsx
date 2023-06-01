import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import "./scroll.css";

console.log(theme);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter basename={"/portfolio/"}>
            <ChakraProvider theme={theme}>
                <App />
            </ChakraProvider>
        </BrowserRouter>
    </React.StrictMode>
);
