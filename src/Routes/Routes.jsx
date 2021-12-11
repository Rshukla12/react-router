import React from "react";
import { Route, Switch } from "react-router";
import About from "../Pages/About";
import Cart from "../Pages/Cart";
import CategoryView from "../Pages/CategoryView";
import Contact from "../Pages/Contact";
import FAQ from "../Pages/FAQ";
import Home from "../Pages/Home";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/categories/:category">
                <CategoryView />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/contact">
                <Contact />
            </Route>
            <Route exact path="/faq">
                <FAQ />
            </Route>
            <Route exact path="/cart">
                <Cart />
            </Route>
        </Switch>
    )
}

export default Routes;