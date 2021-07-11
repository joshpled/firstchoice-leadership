import Client from "layouts/Client.js";
import Main from "layouts/Main.js";
import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import "./context/icons";

function App() {
  const [rePath, setrePath] = useState("");
  useEffect(() => {
    setrePath(sessionStorage.getItem("path"));
  }, []);

  return (
    <>
      <Route path="/home" render={(props) => <Main {...props} />} />
      <Route path="/client" render={(props) => <Client {...props} />} />
      <Redirect from="/" to={rePath ? rePath : "/home/landing"} />;
    </>
  );
}

export default App;
