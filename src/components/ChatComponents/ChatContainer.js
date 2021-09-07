import { auth } from "../../firebase";
import ChatRoom from "./ChatRoom";
import { useAuthState } from "react-firebase-hooks/auth";

function ChatContainer() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <section>
        <ChatRoom {...{ user }} />
      </section>
    </div>
  );
}

export default ChatContainer;
