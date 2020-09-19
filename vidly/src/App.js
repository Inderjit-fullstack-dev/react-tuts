import React from "react";

import Header from "./components/HeaderComponent/Header";
import Movies from "./components/movies";
import customers from "./components/CustomerComponent/Customer.jsx";
import { Redirect, Route, Switch } from "react-router-dom";
import Rental from "./components/RentalComponent/Rental";
import Notfound from "./components/NotfoundComponent/Notfound";
import MovieForm from "./components/MovieForm";
import LoginForm from "./components/LoginComponent/LoginForm";
import "./App.css";
function App() {
  return (
    <React.Fragment>
      <Header />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={customers} />
          <Route path="/rentals" component={Rental} />
          <Route path="/not-found" component={Notfound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
