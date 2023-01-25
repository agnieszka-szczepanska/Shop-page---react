import User from "./User";

function Users(props) {
  return (
    <div>
      <input
        className="inputStyle"
        onChange={(e) => props.handleSearch(e.target.value)}
        placeholder="Search User name"
      ></input>
      {props.users.map((a) => (
        <User
          key={a.id}
          name={a.name}
          email={a.email}
          id={a.id}
          handleDelete={props.handleDelete}
        ></User>
      ))}
    </div>
  );
}
export default Users;
