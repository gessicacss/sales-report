import styled from "styled-components";
import { BsFillPersonFill } from 'react-icons/bs'

export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <h4>Menu</h4>
        <h3><BsFillPersonFill color="red" />Username</h3>
      </div>
      <Title>Sales Report</Title>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #69a3e6;
  padding: 5px 20px;
  margin-bottom: 15px;
  gap:30px;
  color: #fff;
  div {
    display: flex;
    gap: 30px;
    justify-content: space-between;
    h3 {
      display: flex;
      align-items: center;
      gap:5px;
    }
  }
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 32px;
`;
