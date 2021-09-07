export default function ChatMessage(props) {
  const { content, forUser } = props.message;
  const messageClass = forUser === props.user.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img src={props.user.photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"} style={{ height: "30px", borderRadius: "50%" }} />
        <p>{content}</p>
      </div>
    </>
  );
}
