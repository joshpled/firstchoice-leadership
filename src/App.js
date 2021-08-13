import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./context/icons";
import { Navigation, Footer } from "components";
import generateKey from "context/generateKey";
import routes from "routes";

function App() {
  const location = useLocation();
  const [navRoutes, setNavRoutes] = useState([]);

  useEffect(() => {
    setNavRoutes(
      routes.map((prop) => {
        return <Route exact path={prop.path} key={generateKey(prop.component)} render={(props) => <prop.component {...props} />} />;
      })
    );
  }, []);

  useEffect(() => {
    sessionStorage.setItem("path", location.pathname);
  });

  return (
    <div className="landing-container">
      <div>
        <div>
          <Navigation />
        </div>
      </div>

      <div>
        <Switch>{navRoutes}</Switch>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
