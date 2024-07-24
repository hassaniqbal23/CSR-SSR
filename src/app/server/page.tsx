import React from "react";
import { User } from "../page";

const fetchData = async () => {
  try {
    const response = await fetch("https://dummyjson.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

async function UserPage() {
  let data;
  try {
    data = await fetchData();
    console.log(data);
  } catch (error) {
    return (
      <div>
        <h1>Error loading data</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Server Side Rendered Data</h1>
      <ul>
        {data.users.map((user: User) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserPage;
