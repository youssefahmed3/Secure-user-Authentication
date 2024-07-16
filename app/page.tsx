import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full max-h-min">
    
      <h1>Unprotected Page AnyBody Can Access it</h1>

    </div>
  );
}
