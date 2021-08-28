import { useState, useEffect } from "react";
import MessagesNav from "./MessagesNav";
import Message from "./Message";

const data = [
  {
    id: 1,
    title: "New Emailadsf asdf asd fasd f",
    content:
      "Consectetur et enim id aliquip non magna id sunt labore sunt deserunt in nisi. Magna nostrud consequat ad elit velit minim aliquip aute ullamco laboris dolore magna occaecat fugiat. Commodo aliquip tempor qui elit excepteur.Sit et ex eiusmod irure ex nisi non incididunt fugiat Lorem. Nisi mollit ex nisi officia exercitation eu ut irure officia incididunt consequat incididunt velit labore. Laboris amet ex Lorem est duis cillum in laboris id dolore. Eu minim reprehenderit laboris consequat labore velit anim fugiat voluptate elit veniam est. Ipsum cupidatat id mollit Lorem dolor ut sint ut incididunt irure. Qui ut tempor fugiat enim velit anim do ut do do dolor.",
    read: false,
    date: "Nov 1",
  },
  { id: 2, title: "Random", content: "some contentasdf asdf ", read: false, date: "Nov 1" },
  { id: 3, title: "TRest", content: "some content fasdf asdf ", read: true, date: "Nov 1" },
];

export default function MessagesContainer() {
  const [currentNav, setCurrentNav] = useState("all-messages");
  const [filteredMessages, setFilteredMessages] = useState([...data]);

  useEffect(() => {
    switch (currentNav) {
      case "unread-messages":
        setFilteredMessages(data.filter((x) => x.read === false));
        break;
      case "read-messages":
        setFilteredMessages(data.filter((x) => x.read === true));
        break;
      default:
        setFilteredMessages(data);
    }
  }, [currentNav]);

  const showMessages = () => {
    return filteredMessages.map(({ id, title, content, read, date }) => <Message id={id} title={title} content={content} read={read} date={date} />);
  };

  return (
    <div className="messages-container">
      <div className="messages-menu">
        <MessagesNav setCurrentNav={setCurrentNav} />
      </div>
      <div className="messages-list">
        <ul>{showMessages()}</ul>
      </div>
    </div>
  );
}
