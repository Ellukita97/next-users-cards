import Link from "next/link";
import React from "react";

function UsersCard({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <li className="bg-slate-400 mb-2 p-4 rounded-md flex justify-between">
            <div>
              <h3 className="font-bold">
                {user.id}. {user.first_name}
              </h3>
              <p>{user.email}</p>
            </div>
            <img src={user.avatar} className="rounded-full w-20" alt="" />
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default UsersCard;
