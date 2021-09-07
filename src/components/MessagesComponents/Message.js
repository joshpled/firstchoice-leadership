import { useState } from "react";
import generateKey from "context/generateKey";
import { Button, Modal } from "react-bootstrap";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function Message({ id, title, content, read, date, className, checkAll, checked }) {
  const [toggleMessage, setToggleMessage] = useState(false);

  const updateMessage = async () => {
    const messagesRef = doc(db, "messages", `${id}`);
    console.log(messagesRef);
    // await updateDoc(messageRef, {
    //   read: true,
    // });
  };
  return (
    <div {...{ className }}>
      <li key={generateKey(title)}>
        <div className="message-checkbox">
          <input type="checkbox" data-messageid={id} onClick={checkAll} checked={checked} />
        </div>
        <div onClick={() => setToggleMessage((p) => !p)} className="message-wrapper">
          <div className="message-title" style={{ fontWeight: read ? "100" : "400" }}>
            {title}
          </div>
          <div className="message-content">{content}</div>
          <div className="message-date">{date}</div>
        </div>
      </li>
      <Modal show={toggleMessage} onHide={() => setToggleMessage((p) => !p)}>
        <Modal.Header>
          <div>{title}</div>
          <div>{date}</div>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          <Button>Delete</Button>
          <Button onClick={() => updateMessage()}>Mark as Read</Button>
          <Button onClick={() => setToggleMessage((p) => !p)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
