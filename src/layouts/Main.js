import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navigation, Footer } from "components";
import { Landing, Professional, Personal, Contact, About } from "pages";

function Main() {
  return (
    <div className="landing-container">
      <Navigation />
      <div>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/personal" exact component={Personal} />
          <Route path="/professional" exact component={Professional} />
          <Route path="/contact-me" exact component={Contact} />
          <Route path="/about" exact component={About} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
