export default function UserCard({ user }) {
  const { name, email, address } = user || {};
  return (
    <div className="border p-4 rounded-2xl">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <ul>
        <li>Address</li>
        <li>City : {address?.city}</li>
        <li>Street : {address?.street}</li>
      </ul>
    </div>
  );
}
