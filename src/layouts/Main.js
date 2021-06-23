import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navigation, Footer } from "components";
import { Landing, Professional, Personal } from "pages";

function Main() {
  return (
    <div className="landing-container">
      <Navigation />
      <div>
        <Switch>
          <Route path="/" exact component={Landing} render={(props) => <Landing {...props} />} />
          <Route path="/personal" exact component={Personal} render={(props) => <Personal {...props} />} />
          <Route path="/professional" exact component={Professional} render={(props) => <Professional {...props} />} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
