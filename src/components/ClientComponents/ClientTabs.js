import { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import ChatContainer from "../ChatComponents/ChatContainer";

export default function ClientTabs() {
  const [currentNav, setCurrentNav] = useState("all-messages");

  return (
    <Tabs defaultActiveKey="messages" id="profile-tabs" className="client-tabs-container">
      <Tab eventKey="messages" title="Chat">
        <h1 className="text-center">Chat is coming SOON!</h1>
        {/* <ChatContainer /> */}
      </Tab>
      <Tab eventKey="progress" title="Progress">
        <h1 className="text-center">When you're my client, I'll help you keep track of your progress.</h1>
      </Tab>
      <Tab eventKey="documents" title="Documents">
        No Documents
      </Tab>
    </Tabs>
  );
}
