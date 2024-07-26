import React from "react";
import { useRouter } from "next/navigation";

function UserNotFound() {
  const router = useRouter();

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <h1>User Not Found</h1>
      <button onClick={() => router.push("/")}>Back to Home</button>
    </div>
  );
}

export default UserNotFound;
