import { useState } from "react";
import { Alert } from "react-bootstrap";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import MessagesNav from "./MessagesNav";
import MessagesList from "./MessagesList";

export default function MessagesContainer() {
  const [user, loading, error] = useAuthState(auth);
  const [messagesTab, setMessTabs] = useState("all");

  return (
    <div className="messages-container">
      {error && <Alert variant="danger">{error.message}</Alert>}
      <MessagesNav {...{ setMessTabs }} />
      {loading || <MessagesList {...{ messagesTab }} />}
    </div>
  );
}
