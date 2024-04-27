import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";

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

          <Button
            type="submit"
            className="my-4  self-center bg-gradient-to-tr to-yellow-200 from-yellow-500 text-black shadow-lg text-lg"
          >
            <Link className="w-fit" href={"/chatbox"}>
              Contact us now
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
