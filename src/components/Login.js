import React from "react";
import styled from "styled-components";

import {
  BoxWrapper,
  PageContainer,
  HeaderContainer,
  CenterText,
  Input,
  Label,
  Button,
  TextContent
} from "./../styles/common";

export const Center = styled.div`
  position: relative;
  min-width: 300px;
  width: 50%;
  padding: 20px;
  margin: auto;
`;

export const AlignCenter = styled.div`
  padding: 15px;
  text-align: center;
`;

const Login = props => {
  return (
    <PageContainer>
      <BoxWrapper>
        <HeaderContainer></HeaderContainer>
        <CenterText>Welcome to Ooty.Nice to meet you</CenterText>
        <form>
          <Center>
            <Label>UserName</Label>
            <Input type="text" />
            <Label>Password</Label>
            <Input type="password" />
            <AlignCenter>
              <Button>Login</Button>
              <TextContent>
                Forgot password ?<a href="#"> Reset </a>
              </TextContent>
            </AlignCenter>
          </Center>
        </form>
      </BoxWrapper>
    </PageContainer>
  );
};

export default Login;
