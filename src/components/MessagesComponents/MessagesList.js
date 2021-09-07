import { useState, useEffect } from "react";
import Message from "./Message";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../../firebase";
import generateKey from "context/generateKey";

export default function MessagesList({ messagesTab }) {
  const [user, loading, error] = useAuthState(auth);
  const [firestoreData, setFirestoreData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const q = query(collection(db, "messages"), where("forUser", "==", user.uid));
      const querySnapshot = await getDocs(q);
      setFirestoreData(querySnapshot.docs.map((doc) => doc.data()));
    }
    fetchData();
  }, []);

  const messagesList = (checked = false) => {
    switch (messagesTab) {
      case "all":
        return firestoreData.map(({ id, title, content, read, date }) => <Message {...{ id, title, content, read, date, checked }} key={generateKey()} />);
        break;
      case "unread":
        return firestoreData.map(
          ({ id, title, content, read, date }) => read || <Message {...{ id, title, content, read, date, checked }} key={generateKey()} />
        );
        break;
      case "read":
        return firestoreData.map(
          ({ id, title, content, read, date }) => read && <Message {...{ id, title, content, read, date, checked }} key={generateKey()} />
        );
        break;
      default:
        return firestoreData.map(({ id, title, content, read, date }) => <Message {...{ id, title, content, read, date, checked }} key={generateKey()} />);
        break;
    }
  };
  return (
    <div>
      <ul>
        <Message title="Title" content="Content" className="messages-title-bar" checkAll={() => alert("Cruella")} />
        {messagesList()}
      </ul>
    </div>
  );
}
