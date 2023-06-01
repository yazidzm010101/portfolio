import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTE_PATH } from "./path";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";

function Router() {
    return (
        <Routes>
            <Route path={ROUTE_PATH.index} element={<Home />} />
            <Route
                path="/*"
                element={<ErrorPage code="404" message="Page not found" />}
            />
        </Routes>
    );
}

export default Router;
