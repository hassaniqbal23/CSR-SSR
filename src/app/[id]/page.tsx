"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { User } from "../page";
import Image from "next/image";

function UserInfoPage() {
  const router = useRouter();
  const { id } = useParams();

  const [users, setUserId] = useState<User | null>(null);

  useEffect(() => {
    async function getUserId() {
      const response = await fetch(`https://dummyjson.com/users/${id}`);
      const data = await response.json();
      setUserId(data);
    }
    getUserId();
  }, []);

  if (!users) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center flex-col">
        <li>{users.firstName}</li>
        <li>
          <Image
            src={users?.image}
            height={400}
            width={400}
            alt={"image"}
          ></Image>
        </li>
        <button onClick={() => router.push("/")}>back to home</button>
      </div>
    </>
  );
}

export default UserInfoPage;
