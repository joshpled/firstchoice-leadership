import React, { useEffect, useState } from "react";

import { Route, Switch, useLocation } from "react-router-dom";
//third-party
//local
import { AuthProvider } from "./context/AuthContext";
import routes from "routes";
import generateKey from "context/generateKey";
import PrivateRoute from "components/PrivateRoute";
//compnents
import { Navigation, Footer, SidebarMenu } from "components";
//styling
import "./context/icons";
import { ClientHome, UpdateProfile } from "pages";
import AdminHome from "./pages/admin/AdminHome";

export default function App() {
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
    <div className="main-container">
      <Navigation />
      <SidebarMenu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/admin-home" component={AdminHome} />
          <PrivateRoute exact path="/update-profile" component={UpdateProfile} />
          {navRoutes}
        </Switch>
      </AuthProvider>
      <Footer />
    </div>
  );
}
