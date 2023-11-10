import styled from "styled-components";

export const MobileMenu = styled.div`
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const HeaderContainer = styled.header`
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

export const LeftSide = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  cursor: pointer;
  h3 {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 32px;
  cursor: pointer;
`;
