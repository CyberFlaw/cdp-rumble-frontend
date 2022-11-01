import Image from "next/image";
import RecentUsers from "./recentUsers";

import logo from "../../public/assets/logo.png";
import cog from "../../public/assets/cog.png";

export default function Dashboard() {
  return (
    <div className="bg-white w-5% h-90 rounded-3xl flex items-center justify-between flex-col">
      <dir className="flex items-center justify-center p-4 rounded-3xl bg-black">
        <Image src={logo} alt="logo" height={40} width={40} />
      </dir>
      <RecentUsers />
      <dir className="flex items-center justify-center p-4 rounded-3xl bg-black">
        <Image src={cog} alt="logo" height={40} width={40} />
      </dir>
    </div>
  );
}
