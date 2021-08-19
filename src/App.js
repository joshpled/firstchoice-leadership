import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
//third-party
// import { useAuthState } from "react-firebase-hooks/auth";
//local
import routes from "routes";
import generateKey from "context/generateKey";
// import { auth } from "./firebase";
//compnents
import { Navigation, Footer } from "components";
import { ProtectedRoute } from "components";
//styling
import "./context/icons";

export default function App() {
  const location = useLocation();
  const [navRoutes, setNavRoutes] = useState([]);
  // const [user] = useAuthState(auth);

  useEffect(() => {
    setNavRoutes(
      routes.map((prop) => {
        // if (prop.auth === true) {
        //   return <ProtectedRoute />;
        // }
        return <Route exact path={prop.path} key={generateKey(prop.component)} render={(props) => <prop.component {...props} />} />;
      })
    );
  }, []);

  useEffect(() => {
    sessionStorage.setItem("path", location.pathname);
  });

  return (
    <div className="main-container">
      <Navigation />
      <div className="main-wrapper">
        <Switch>{navRoutes}</Switch>
      </div>
      <Footer />
    </div>
  );
}
