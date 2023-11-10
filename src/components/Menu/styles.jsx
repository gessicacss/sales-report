import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 530px) {
    flex-direction: column;
    gap: 20px;
  }
`;
