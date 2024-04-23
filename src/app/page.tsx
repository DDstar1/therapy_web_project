import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center bg-red-200 h-screen items-center">
      <div className="mb-2 text-center">
        svk kjsvnjsndv skjdvsdnjv kdsjvksdv dksjjvkjnjsd sdjkjvsdn ksjdvbsv kvj
      </div>
      <div className="">
        <button className="bg-blue-200 self-center p-3 ">
          <Link className="w-fit" href={"/chatbox"}>
            Contact us now
          </Link>
        </button>
      </div>
    </div>
  );
}
