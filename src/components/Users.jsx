import  { use } from "react";
import UserCard from "./UserCard";

export default function Users({ usersData }) {
  const users = use(usersData);
  return (
    <div>
      <h1 className="text-2xl text-center mb-5">Total Users {users.length}</h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-3  grid-cols-1 gap-5">
        {
           users.map(user=> <UserCard key={user?.id} user={user}></UserCard>)
        }
      </div>
    </div>
  );
}
