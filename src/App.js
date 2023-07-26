import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import HomePage from './HomePage';
import AddProductsPage from './AddProductsPage';
import ProductsPage from './ProductsPage';

const App = () => {
  const isLoggedIn = true; // Replace with your login status logic
  const isAdmin = true; // Replace with your admin status logic

  return (
    <Router>
      <NavigationBar isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
      <Switch>
        <Route path="/login">
          {isLoggedIn ? <Redirect to="/products" /> : <LoginPage />}
        </Route>
        <Route path="/signup">
          {isLoggedIn ? <Redirect to="/products" /> : <SignupPage />}
        </Route>
        <Route path="/add-products">
          {!isLoggedIn ? <Redirect to="/login" /> : <AddProductsPage />}
        </Route>
        <Route path="/products">
          {!isLoggedIn ? <Redirect to="/login" /> : <ProductsPage />}
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
