"use client";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";

export interface User {
  id: number;
  firstName: string;
  university: string;
  age: number;
  image: string;
}

function Userpage() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUsers(data.users);
    }
    fetchUsers();
  }, []);
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center mt-9">
        {users.map((user) => (
          <div key={user.id}>
            <Link
              href={`/${user.id}`}
              className="border py-4 px-2 w-60 flex mt-4  flex-col "
            >
              name - {user.firstName}
              <h2>age - {user.age}</h2>
              <h3>id - {user.id}</h3>
              <h2>university name - {user.university}</h2>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Userpage;
