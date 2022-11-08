import Image from "next/image";
import CurrentChatNav from "./currentChatNav";
import MessageBuffer from "./messageBuffer";
import Message from "./messgae";

import send from "../../public/assets/send.png";
import { useState } from "react";

export default function ChatArea(props) {
  // useEffect(() => {
  /* 
    -----------------------------------------------------------------------------
    THIS PART MENTIONED BELOW WILL BE DEFINED IN THE CONTEXT
    
    [This part cannoy be implemented due to the lack off time and unability to host the backend]

    - The messages for the room are fetched from the database, and its stored as a list
    - The list is then passed to the MessageBuffer Component
    -----------------------------------------------------------------------------
    */
  // }, []);

  const [text, setText] = useState("");

  const sendMessage = () => {
    const textval = text;
    setText("");
    console.log(textval);
  };

  return (
    <div className="bg-white w-30% h-screen rounded-3xl flex items-center justify-between flex-col min-w-30">
      <CurrentChatNav />
      <div className="w-full h-full">
        <MessageBuffer />
        <div className="w-full grid place-items-center mt-4 ">
          {/* text editor */}
          <div className="w-70% rounded-2xl bg-plane flex flex-row">
            <input
              className="w-full outline-none rounded-2xl text-lg py-2 px-4 text-black font-medium"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyUpCapture={(key) => {
                if (key.code === "Enter" || key.code === "NumpadEnter")
                  sendMessage();
              }}
            />

            <button className="pr-5" onClick={sendMessage}>
              <Image src={send} alt="send" height={24} width={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
