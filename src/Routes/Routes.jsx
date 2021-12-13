import React from "react";
import { Route, Switch } from "react-router";
import About from "../Pages/About";
import Cart from "../Pages/Cart";
import CategoryView from "../Pages/CategoryView";
import DetailView from "../Pages/DetailView";
import Contact from "../Pages/Contact";
import FAQ from "../Pages/FAQ";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";

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
            <Route exact path="/details/:id">
                <DetailView />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
}

export default Routes;