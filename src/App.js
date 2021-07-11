import Client from "layouts/Client.js";
import Main from "layouts/Main.js";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import "./context/icons";

function App() {
  // useEffect(() => {
  //   sessionStorage.getItem("path");
  // }, []);
  return (
    <>
      <Route path="/home" render={(props) => <Main {...props} />} />
      <Route path="/client" render={(props) => <Client {...props} />} />
      <Redirect from="/" to="/home/landing" />;
    </>
  );
}

export default App;
