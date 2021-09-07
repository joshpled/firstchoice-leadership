import { Nav } from "react-bootstrap";

export default function MessagesNav({ setMessTabs }) {
  return (
    <div className="messages-container">
      <Nav
        defaultActiveKey="all"
        variant="pills"
        onSelect={(e) => {
          setMessTabs(e);
        }}
      >
        <Nav.Item>
          <Nav.Link eventKey="all" title="All">
            All
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="unread" title="Unread">
            Unread
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="read" title="Read">
            Read
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
