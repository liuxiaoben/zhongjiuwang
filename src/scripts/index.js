

import React , {Component} from "react";
import ReactDOM , {render} from "react-dom";


const rootElement = document.getElementById("app");
import {HashRouter as Router,BrowserRouter } from "react-router-dom";

import Layout from "./containers/layout"

import {Provider} from "react-redux";
import store from "./store";

const hotRender = (Component) => (
    render(
        <Provider store={store}>
            <Router basename="/">
                <Component/>
            </Router>
        </Provider>,
        rootElement
    )
)

hotRender(Layout);


