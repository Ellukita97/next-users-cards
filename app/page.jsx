import React from "react";
import UsersCard from "@/components/UsersCard";

async function fechUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

async function HomePage() {
  const users = await fechUsers();
  return (
    <>
      <UsersCard users={users} />
    </>
  );
}

export default HomePage;
