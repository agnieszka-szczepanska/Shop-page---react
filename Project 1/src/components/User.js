import styled from "styled-components";

const UserStyled = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

function User(props) {
  return (
    <UserStyled>
      <span>name: {props.name} </span>
      <span>email: {props.email}</span>
      <button onClick={() => props.handleDelete(props.id)}>Delete</button>
    </UserStyled>
  );
}

export default User;
