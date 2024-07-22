"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { User } from "../page";

function UserIdpage() {
  const router = useRouter();
  const { id } = useParams();

  const [userId, setUserId] = useState<User[]>([]);
  console.log(userId);

  useEffect(() => {
    async function getUserId() {
      const response = await fetch(`https://dummyjson.com/users/${id}`);
      const data = await response.json();
      setUserId(data);
    }
    getUserId();
  }, []);
  return (
    <>
      <div>User ID Page</div>
      <button onClick={() => router.push("/")}>back to home</button>
    </>
  );
}

export default UserIdpage;
