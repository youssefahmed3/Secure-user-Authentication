import React from "react";

function Page() {
  return (
    <div className="flex flex-col justify-center items-center max-h-screen">
      <div>
        <h1 className="text-4xl">This is A unProtected Route</h1>
      </div>
      <div>
        <h1 className="text-2xl">Everyone Can See this page</h1>
      </div>
    </div>
  );
}

export default Page;
