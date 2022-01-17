import React from "react";
import "./app.scss";
import AdminPage from "../admin-page";
import HomePage from "../home-page";
import UserPage from "../user-page";
import ProtectedRoute from "../protected-route";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import BuyTarifPage from "../buy-tarif-page";
import UsefulLinks from "../useful-links";

const App = () => {
  const { isAuthenticated, isVerifying } = useSelector((state) => state.authStore);
  const history = useHistory()
  

  return (
    <Switch history={history}>
      <Route exact path="/admin" component={AdminPage} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/buy" component={BuyTarifPage} />
      <Route exact path="/utility" component={UsefulLinks} />
      <ProtectedRoute
        path="/lessons/:id?"
        component={UserPage}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <Redirect to='/lessons/1'/>
    </Switch>
  );
};

export default App;
