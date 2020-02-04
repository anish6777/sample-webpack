import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import { Link } from "@reach/router";

import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import Searchbar from "./../Searchbar";
import { UserX } from "styled-icons/boxicons-regular";

const UserXIcon = styled(UserX)`
  color: #6a7a45;
  height: 30px;
  &:hover {
    color: #e9a447;
  }
`;

const Navbar = props => {
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)"
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <BrandName>
            <StyledLink to="/">Sgjgffh</StyledLink>
          </BrandName>
          <Searchbar />
          <NavLinks style={linkAnimation}>
            <a href="/">Sp</a>
            <a href="/">B</a>
            <a href="/">Off</a>
            <NavDropDown>
              <UserXIcon />
              <NavDropDownContent>
                <DropDownLinks>
                  <StyledLinkWhite to="login">Login</StyledLinkWhite>
                </DropDownLinks>
                <DropDownLinks>
                  <StyledLinkWhite to="register">Register</StyledLinkWhite>
                </DropDownLinks>
              </NavDropDownContent>
            </NavDropDown>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </>
  );
};

export default Navbar;

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: white;
  z-index: 1;
  font-size: 1.4rem;
  padding-bottom: 15px;
  box-shadow: 0 2px 5px #6a7a45;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #6a7a45;
`;

const StyledLinkWhite = styled(Link)`
  color: white !important;
`;
const BrandName = styled.h1`
  padding: 10px;
  margin: auto 0;
  color: #6a7a45;
  cursor: pointer;
  &:hover {
    color: #e9a447;
  }
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 5rem;
`;

const NavDropDown = styled.span`
  padding: 0px;
  position: fixed;
  top: 0px;
`;

const NavDropDownContent = styled.ul`
  display: none;
  position: absolute;
  ${NavDropDown}: hover & {
    display: block;
  }
`;

const DropDownLinks = styled.li`
  list-style-type: none;
  text-transform: uppercase;
  background-color: #6a7a45;
  font-weight: 600;
  border-bottom: 1px solid transparent;
  margin: 0 1.5rem;
  padding: 5px;
  transition: all 300ms linear 0s;
  text-decoration: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    color: #e9a447;
    border-bottom: 1px solid #fdcb6e;
  }
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    padding: 5px;
    color: #6a7a45;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #e9a447;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;
