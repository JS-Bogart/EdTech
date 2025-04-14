import {
  HeaderWrap,
  HeaderIconWrap,
  TextBox,
  SideText,
  StyledSVG,
} from "./HeaderStyles";
import { PlanetIcon } from "../../public/icons";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderWrap>
      <Link href="/">
        <HeaderIconWrap>
          <TextBox>
            <SideText $position="left">EdTech</SideText>
          </TextBox>
          <StyledSVG>
            <PlanetIcon />
          </StyledSVG>
          <TextBox>
            <SideText $position="right">Videos</SideText>
          </TextBox>
        </HeaderIconWrap>
      </Link>
    </HeaderWrap>
  );
};

export default Header;
