import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  AddProducts,
  Cart,
  Navbar,
  Products,
  ProductDetail,
} from "./Components";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import { fetchProducts } from "./api";
import { LoadProduct } from "./actions";

class App extends Component {
  async componentDidMount() {
    this.props.store.subscribe(() => {
      console.log("updated------------------------------->")
      this.forceUpdate();
      console.log(this.props.store.getState())
    });
    const products = await fetchProducts();
    this.props.store.dispatch(LoadProduct(products.data));
  }

  render() {
    const { store } = this.props;
    console.log(store);

    return (
      <Router>
         <ReactNotification />
        <Navbar items = {store.getState().cartReducer.cart.length} />
        <Switch>
          <Route
            path="/" exact
            render={(props) => <Products {...props} store={store} />}
          ></Route>
          <Route path="/cart"  render={(props) => <Cart {...props} store={store} />}></Route>
          <Route path="/add-product"  render={(props) => <AddProducts {...props} store={store} />}></Route>
          <Route path="/product-detail" render={(props) => <ProductDetail {...props} store={store} />}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
