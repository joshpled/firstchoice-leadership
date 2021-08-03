import Client from "layouts/Client.js";
import Main from "layouts/Main.js";
import React, { useEffect, useState } from "react";
import { Redirect, Route, BrowserRouter } from "react-router-dom";
import "./context/icons";

function App() {
  //saves last path visited to redirect
  const [lastPath, setLastPath] = useState("");
  useEffect(() => {
    setLastPath(sessionStorage.getItem("path"));
  }, []);

  return (
    <BrowserRouter>
      <Route path="/home" render={(props) => <Main {...props} />} />
      <Route path="/client" render={(props) => <Client {...props} />} />
      <Redirect from="/" to={lastPath ? lastPath : "/home/landing"} />
    </BrowserRouter>
  );
}

export default App;
