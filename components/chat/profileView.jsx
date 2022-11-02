import Image from "next/image";
// Replace it from google img
import logo from "../../public/assets/logo.png";

export default function ProfileView() {
  return (
    <div className="bg-white w-20% h-90 rounded-3xl flex items-center justify-between flex-col ">
      <div className="my-10 w-50% h-1/4 bg-plane rounded-full grid place-items-center">
        {/* Replace with image */}
        <Image src={logo} alt="user-img" />
      </div>

      <div className="flex justify-center items-center flex-col -mt-4">
        {/* Add dynamic handle */}
        <h1 className="text-4xl font-500 mb-5 ">Angith</h1>
        <h3>User id: 312897</h3>
      </div>

      <div className="my-10 w-full flex justify-center items-center flex-col">
        <div className="bg-green rounded-3xl w-70% flex items-center justify-between px-5 py-5 mb-5">
          <h3 className="font-medium text-lg text-plane">Texts Send </h3>
          {/* make it dynamic */}
          <h3 className="font-medium text-lg text-plane">50</h3>
        </div>

        <div className="bg-blue rounded-3xl w-70% flex items-center justify-between px-5 py-5 mb-5">
          <h3 className="font-medium text-lg text-plane">Texts Recieved </h3>
          {/* make it dynamic */}
          <h3 className="font-medium text-lg text-plane">50</h3>
        </div>

        <div className="bg-red rounded-3xl w-70% flex items-center justify-between px-5 py-5 mb-5">
          <h3 className="font-medium text-lg text-plane">Total Text </h3>
          {/* make it dynamic */}
          <h3 className="font-medium text-lg text-plane">100</h3>
        </div>
      </div>
    </div>
  );
}
