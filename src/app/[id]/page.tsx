"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { User } from "../page";

function UserInfoPage() {
  const router = useRouter();
  const { id } = useParams();

  const [user, setUser] = useState<User | null>(null);
  console.log(user);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        if (!response.ok) {
          if (response.status === 404) {
            setNotFound(true);
          }
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    }
    getUser();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (notFound) {
    return <div>user not found</div>;
  }

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <li>{user?.firstName}</li>
      <li>
        <Image src={user?.image} height={400} width={400} alt="User Image" />
      </li>
      <button onClick={() => router.push("/")}>Back to Home</button>
    </div>
  );
}

export default UserInfoPage;
