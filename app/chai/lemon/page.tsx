import Image from "next/image";

export default function Lemonpage() {
  const lemonimg: string = "/lemon.jpg";
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-6xl">Lemon tea</div>
      <Image
        className="mt-8"
        src={lemonimg}
        height={300}
        width={300}
        alt="Lemon tea"
      />
    </div>
  );
}
