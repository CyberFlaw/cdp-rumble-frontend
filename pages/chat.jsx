import Dashboard from "../components/chat/dashboard";
import ChatArea from "../components/chat/chatArea";
import ProfileView from "../components/chat/profileView";

export default function Chat() {
  return (
    <div className="h-screen w-full bg-black flex flex-row items-center justify-around p-10">
      <Dashboard />
      <ChatArea />
      <ProfileView />
    </div>
  );
}
