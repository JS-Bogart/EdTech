"use client";
import {
  HeaderWrap,
  HeaderIconWrap,
  TextBox,
  SideText,
  SideTextMobile,
  StyledSVG,
  LinkWrap,
  HeaderRight,
} from "./HeaderStyles";
import { PlanetIcon } from "../../public/icons";
import Link from "next/link";
import { useCheckScreenSize } from "../../lib/useCheckScreenSize";
import { ButtonComponent, ContributeModal } from "../";
import { useModal } from "../../lib/ModalContext";

const Header = () => {
  const isMobile = useCheckScreenSize(800);
  const { openModal } = useModal();

  const handleOpen = () => {
    openModal(<ContributeModal />);
  };

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
                <SideTextMobile>Home</SideTextMobile>
              </TextBox>
            )}
          </HeaderIconWrap>
        </Link>
      </LinkWrap>
      <HeaderRight>
        <ButtonComponent buttonText="CONTRIBUTE" buttonClick={handleOpen} />
      </HeaderRight>
    </HeaderWrap>
  );
};

export default Header;
