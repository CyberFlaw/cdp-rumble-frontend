import Image from "next/image";

import edit from "../../public/assets/edit.png";
import remove from "../../public/assets/remove.png";

export default function Message(props) {
  return props.type === "send" ? (
    <div className="rounded-2xl text-lg py-2 px-4 text-black font-medium w-auto bg-green mb-6">
      <div>
        <h3>{props.text}</h3>
      </div>
      <div className="flex flex-row items-center justify-end">
        <Image src={edit} height={16} width={16} alt="edit" className="mx-5" />
        <Image src={remove} height={16} width={16} alt="remove" />
      </div>
    </div>
  ) : (
    <div className="rounded-2xl text-lg py-2 px-4 text-black font-medium w-auto bg-teal mb-6">
      <div>
        <h3>{props.text}</h3>
      </div>
      <div className="flex flex-row items-center justify-end">
        <Image src={edit} height={16} width={16} alt="edit" className="mx-5" />
        <Image src={remove} height={16} width={16} alt="remove" />
      </div>
    </div>
  );
}
