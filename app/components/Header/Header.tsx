"use client";
import {
  HeaderWrap,
  HeaderIconWrap,
  TextBox,
  SideText,
  SideTextMobile,
  StyledSVG,
  LinkWrap,
  ModalButton,
  HeaderRight,
} from "./HeaderStyles";
import { PlanetIcon } from "../../public/icons";
import Link from "next/link";
import { useCheckScreenSize } from "../../lib/useCheckScreenSize";
import { ButtonComponent } from "../";

const Header = () => {
  const isMobile = useCheckScreenSize(800);

  return (
    <HeaderWrap>
      <LinkWrap>
        <Link href="/">
          <HeaderIconWrap>
            {!isMobile && (
              <TextBox>
                <SideText $position="left">EdTech</SideText>
              </TextBox>
            )}
            <StyledSVG>
              <PlanetIcon />
            </StyledSVG>
            {!isMobile && (
              <TextBox>
                <SideText $position="right">Videos</SideText>
              </TextBox>
            )}
            {isMobile && (
              <TextBox>
                <SideTextMobile $position="right">Home</SideTextMobile>
              </TextBox>
            )}
          </HeaderIconWrap>
        </Link>
      </LinkWrap>
      <HeaderRight>
        <ButtonComponent buttonText="CONTRIBUTE" />
      </HeaderRight>
    </HeaderWrap>
  );
};

export default Header;
