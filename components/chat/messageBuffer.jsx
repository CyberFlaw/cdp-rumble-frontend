import Message from "./messgae";

export default function MessageBuffer() {
  return (
    <div className="h-full w-full p-10 overflow-y-auto">
      <Message type="recive" text="Helikopter helikopter" />
      <Message type="send" text="I am unstoppible" />
      <Message type="recive" text="🤕" />
    </div>
  );
}
