import { useState } from "react";
import generateKey from "context/generateKey";
import { Button, Modal } from "react-bootstrap";

export default function Message({ id, title, content, read, date }) {
  const [toggleMessage, setToggleMessage] = useState(false);
  return (
    <>
      <li key={generateKey(title)} onClick={() => setToggleMessage((p) => !p)}>
        <input type="checkbox" data-messageid={id} />
        <div className="message-title" style={{ fontWeight: read ? "100" : "400" }}>
          {title}
        </div>
        <div className={"message-content"}>{content}</div>
        <div className="message-date">{date}</div>
      </li>
      <Modal show={toggleMessage} onHide={() => setToggleMessage((p) => !p)}>
        <Modal.Header>
          <div>{title}</div>
          <div>{date}</div>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          <Button>Delete</Button>
          <Button>Mark as Read</Button>
          <Button onClick={() => setToggleMessage((p) => !p)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
