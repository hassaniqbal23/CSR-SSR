"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export interface User {
  id: number;
  firstName: string;
  university: string;
  age: number;
  image: string;
}

function Userpage() {
  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/users",
    fetcher
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Error fetching users", error);
    return <div>Error fetching users</div>;
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center mt-9">
      {data &&
        data.users.map((user: User) => (
          <div
            key={user.id}
            className="border py-4 px-2 w-60 flex mt-4 flex-col"
          >
            <Link href={`/${user.id}`}>
              <div>Name: {user.firstName}</div>
              <h2>Age: {user.age}</h2>
              <h3>ID: {user.id}</h3>
              <h2>University: {user.university}</h2>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Userpage;
