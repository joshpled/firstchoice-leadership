import { useState } from "react";
import generateKey from "context/generateKey";

export default function Message({ id, title, content, read, date }) {
  const [toggleMessage, setToggleMessage] = useState(true);
  return (
    <li key={generateKey(title)} onClick={() => setToggleMessage((p) => !p)}>
      <input type="checkbox" data-messageid={id} />
      <div className="message-title" style={{ fontWeight: read ? "100" : "400" }}>
        {title}
      </div>
      <div className={`message-content ${toggleMessage ? "closed-message" : "open-message"}`}>{content}</div>
      <div className="message-date">{date}</div>
    </li>
  );
}
