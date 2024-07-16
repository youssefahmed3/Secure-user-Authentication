"use client";
import { useSession } from "next-auth/react";
import React from "react";

function Page() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="flex justify-center items-center max-h-screen text-center gap-2">
      {session ? (
        <div>
          {session.user?.name ? (
            <>
              <h1 className="text-4xl">Welcome, {session.user?.name}!</h1>
            </>
          ) : (
            <>
              <h1 className="text-4xl">Welcome, {session.user?.username}!</h1>
            </>
          )}
          <p className="text-2xl">Your email: {session.user?.email}</p>
        </div>
      ) : (
        <div>
          <h1 className="text-4xl">This is A Protected Route</h1>
          <h1 className="text-2xl">Please log in to view your profile.</h1>
        </div>
      )}
    </div>
  );
}

export default Page;
