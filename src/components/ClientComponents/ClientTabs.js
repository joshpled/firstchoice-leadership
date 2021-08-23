import React from "react";
import { Tabs, Tab } from "react-bootstrap";

export default function ClientTabs() {
  return (
    <Tabs defaultActiveKey="messages" id="profile-tabs" className="mb-3">
      <Tab eventKey="messages" title="Messages">
        Something
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
