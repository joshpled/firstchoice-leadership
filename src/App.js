import React from "react";
import Main from "./layouts/Main";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelopeOpen, faHome, faIdCard, faPeopleArrows, faPhoneAlt, faUser, faUserTie } from "@fortawesome/free-solid-svg-icons";

library.add(faPhoneAlt, faEnvelopeOpen, faUser, faUserTie, faPeopleArrows, faHome, faIdCard);

function App() {
  return (
    <>
      <Main />
    </>
  );
}

export default App;
