import MessagesContainer from "components/MessagesComponents/MessagesContainer";
import { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";

export default function ClientTabs() {
  const [currentNav, setCurrentNav] = useState("all-messages");

  return (
    <Tabs defaultActiveKey="messages" id="profile-tabs" className="client-tabs-container">
      <Tab eventKey="messages" title="Messages">
        <MessagesContainer />
      </Tab>
      <Tab eventKey="progress" title="Progress">
        Something Else
      </Tab>
      <Tab eventKey="documents" title="Documents">
        Something
      </Tab>
    </Tabs>
  );
}
