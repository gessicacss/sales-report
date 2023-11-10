import { BsFillPersonFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { HeaderContainer, LeftSide, MobileMenu, Title } from "./styles";

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