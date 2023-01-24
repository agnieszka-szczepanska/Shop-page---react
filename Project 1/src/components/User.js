import styled from "styled-components";

const UserStyled = styled.div`
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

function User(props) {
  return (
    <UserStyled>
      <span>name: {props.name} </span>
      <span>email: {props.email}</span>
    </UserStyled>
  );
}

export default User;
