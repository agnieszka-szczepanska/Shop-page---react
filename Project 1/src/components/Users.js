import User from "./User";
function Users(props) {
  return (
    <div>
      {props.users.map((a) => (
        <User key={a.id} name={a.name} email={a.email} id={a.id}></User>
      ))}
    </div>
  );
}
export default Users;
