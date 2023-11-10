import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

export default function Header() {
  return (
    <HeaderContainer>
      <MobileMenu>
        <FaBars />
      </MobileMenu>
      <LeftSide>
        <h4>Menu</h4>
        <h3>
          <BsFillPersonFill color="red" />
          Username
        </h3>
      </LeftSide>
      <Title>Sales Report</Title>
    </HeaderContainer>
  );
}

const MobileMenu = styled.div`
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #69a3e6;
  padding: 5px 20px;
  margin-bottom: 15px;
  gap: 30px;
  color: #fff;
  font-family: "Roboto", sans-serif;
`;

const LeftSide = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  h3 {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 32px;
`;
