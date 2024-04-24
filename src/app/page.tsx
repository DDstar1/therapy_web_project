import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex fixed flex-col justify-center bg-[url('/therapy_bg.jpg')] bg-cover bg-center h-screen w-screen items-center">
      <div className="relative p-4 flex justify-center">
        <div className="absolute w-full h-full top-0 backdrop-blur-sm"></div>
        <div className="min-w-[70%] h-full top-0 flex justify-center flex-col z-40 relative">
          <div className="mb-2 text-center ">
            svk kjsvnjsndv skjdvsdnjv kdsjvksdv dksjjvkjnjsd sdjkjvsdn ksjdvbsv
            kvj
          </div>

          <button className="bg-blue-200 self-center p-3 ">
            <Link className="w-fit" href={"/chatbox"}>
              Contact us now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
