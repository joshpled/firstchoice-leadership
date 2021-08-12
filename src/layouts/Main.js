import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Navigation, Footer, IconNavigation } from "components";
import generateKey from "context/generateKey";
import routes from "routes";

function Main() {
  const location = useLocation();

  const getRoutes = (routes) => {
    return routes.map((prop) => {
      if (prop.layout === "/home") {
        return <Route path={prop.layout + prop.path} key={generateKey(prop.component)} render={(props) => <prop.component {...props} />} />;
      } else {
        return null;
      }
    });
  };

  useEffect(() => {
    sessionStorage.setItem("path", location.pathname);
  });

  return (
    <div className="main-div">
      <div className="navigation-div">
        <div id="main-navbar">
          <Navigation />
        </div>
        <div id="collapse-navbar">
          <IconNavigation />
        </div>
      </div>

      <div className="main-content-div">
        <Switch>{getRoutes(routes)}</Switch>
      </div>
      <div className="footer-div">
        <Footer />
      </div>
    </div>
  );
}

export default Main;
