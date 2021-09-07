import { useState, useRef, useEffect } from "react";
import { db } from "../../firebase";
import ChatMessage from "./ChatMessage";
import { Timestamp, collection, query, orderBy, limit, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";

export default function ChatRoom({ user }) {
  const dummy = useRef();
  const messagesRef = collection(db, "messages");
  const messagesQuery = query(messagesRef, orderBy("createdAt"), limit(25));

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    onSnapshot(messagesQuery, (querySnapshot) => {
      setMessages(querySnapshot.docs.map((doc) => doc.data()));
    });
  });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = user;
    await addDoc(messagesRef, {
      content: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages && messages.map((msg) => <ChatMessage key={msg.title} message={msg} user={user} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

        <button type="submit" disabled={!formValue}>
          Send
        </button>
      </form>
    </>
  );
}
