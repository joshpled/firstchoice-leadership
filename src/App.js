import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
//third-party
import { useAuthState } from "react-firebase-hooks/auth";
//local
import routes from "routes";
import generateKey from "context/generateKey";
import { auth } from "./firebase";
//compnents
import { Navigation, Footer } from "components";
//styling
import "./context/icons";

function App() {
  const location = useLocation();
  const [navRoutes, setNavRoutes] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    setNavRoutes(
      routes.map((prop) => {
        if (user !== null) {
          return <Route exact path={prop.path} key={generateKey(prop.component)} render={(props) => <prop.component {...props} />} />;
        }
        if (prop.auth === false) {
          return <Route exact path={prop.path} key={generateKey(prop.component)} render={(props) => <prop.component {...props} />} />;
        }
        return null;
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
