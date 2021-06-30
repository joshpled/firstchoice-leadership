import React from "react";
import { Route, Switch } from "react-router-dom";
import { ClientLogin } from "pages";

function Client() {
  return (
    <div>
      <Switch>
        <Route path="/client-login" exact component={ClientLogin} />
      </Switch>
    </div>
  );
}

export default Client;
