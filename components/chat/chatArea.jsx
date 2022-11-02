import Image from "next/image";
import CurrentChatNav from "./currentChatNav";
import MessageBuffer from "./messageBuffer";

import send from "../../public/assets/send.png";

export default function ChatArea() {
  return (
    <div className="bg-white w-70% h-90 rounded-3xl flex items-center justify-between flex-col">
      <CurrentChatNav />
      <div className="w-full h-full">
        <MessageBuffer />
      </div>
      <div className="w-full grid place-items-center">
        {/* text editor */}
        <div className="w-70% rounded-2xl my-5 bg-plane flex flex-row">
          <input
            className="w-full outline-none rounded-2xl text-lg py-2 px-4 text-black font-medium"
            type="text"
          />

          <button className="pr-5">
            <Image src={send} alt="send" height={24} width={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
