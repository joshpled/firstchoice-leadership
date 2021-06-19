import Landing from "pages/Landing";
import React from "react";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    </>
  );
}

export default App;
