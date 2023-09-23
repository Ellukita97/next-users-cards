import React from "react";

async function fechUsers(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

async function users({ params }) {
  const data = await fechUsers(params.id);
  return (
    <div className="bg-red-300 p-10 rounded-md">
      <img src={data.avatar} className="m-auto my-4" alt="" />
      <h3 className="text-3xl font-bold">
        {data.id} {data.first_name} {data.last_name}{" "}
      </h3>
      <p>{data.email}</p>
    </div>
  );
}

export default users;
