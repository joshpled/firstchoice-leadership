import { useState } from "react";
import { Nav } from "react-bootstrap";

export default function MessagesNav({ setCurrentNav, handleSearch }) {
  const [search, setSearch] = useState(true);
  return (
    <Nav defaultActiveKey="all-messages" activeKey="all-messages">
      <Nav.Item>
        <Nav.Link eventKey="all-messages" onSelect={() => setCurrentNav("all-messages")}>
          All
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="unread-messages" onSelect={() => setCurrentNav("unread-messages")}>
          Unread
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="read-messages" onSelect={() => setCurrentNav("read-messages")}>
          Read
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="search-messages" onSelect={() => setCurrentNav("search-messages")} onClick={() => setSearch((prev) => !prev)}>
          {search ? "Search" : "Hide Search"}
        </Nav.Link>
      </Nav.Item>
      <input type="text" hidden={search} style={{ margin: "0 5px" }} onChange={handleSearch} />
    </Nav>
  );
}
