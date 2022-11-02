import Image from "next/image";

// replace it with image from google
import logo from "../../public/assets/logo.png";
import cog from "../../public/assets/cog.png";

export default function CurrentChatNav() {
  return (
    <div className="flex items-center justify-between w-full py-5 bg-black px-10 border rounded-2xl border-white">
      <div className="rounded-full bg-plane p-1">
        {/* Edit with image */}
        <Image height={48} width={48} src={logo} alt="img" />
      </div>
      <div>
        <h1 className="text-yellow text-4xl">Angith</h1>
      </div>
      <div className="">
        <button>
          <Image src={cog} alt="logo" height={40} width={40} />
        </button>
      </div>
    </div>
  );
}
