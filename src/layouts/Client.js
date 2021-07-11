import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Navigation, Footer, IconNavigation } from "components";
import generateKey from "context/generateKey";
import routes from "routes";

function Main() {
  const location = useLocation();
  const getRoutes = (routes) => {
    return routes.map((prop) => {
      if (prop.layout === "/client") {
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
    <div className="landing-container" style={{ animation: "none" }}>
      <div className="navigation-container">
        <div id="main-navbar">
          <Navigation />
        </div>
        <div id="collapse-navbar">
          <IconNavigation />
        </div>
      </div>

      <div>
        <Switch>{getRoutes(routes)}</Switch>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
