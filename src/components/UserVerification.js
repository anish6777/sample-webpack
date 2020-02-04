import React from "react";
import styled from "styled-components";

import {
  BoxWrapper,
  PageContainer,
  HeaderText,
  SignBoard,
  Input,
  Label,
  Button,
  TextContent,
  FormGroup,
  CenterText
} from "./../styles/common";

export const Middle = styled.div`
  position: absolute;
`;

export const Center = styled.div`
  position: absolute;
  min-width: 300px;
  width: 50%;
  padding: 20px;
  margin: auto;
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const AlignCenter = styled.div`
  padding: 15px;
  text-align: center;
  margin: auto;
`;

export const NewButton = styled(Button)`
  margin-top: 15px;
`;

const Register = props => {
  return (
    <PageContainer>
      <BoxWrapper width="800" height="550">
        <SignBoard>
          <HeaderText>Verify Contact</HeaderText>
        </SignBoard>
        <CenterText>
          Please enter the OTP received on your email and phone number
        </CenterText>
        <Center>
          <FormGroup>
            <Label>Email OTP</Label>
            <Input type="text" />
            <NewButton>Verify</NewButton>
            <TextContent>
              Didn't get OTP ?<a href="#"> Resend </a>
            </TextContent>
          </FormGroup>
          <FormGroup>
            <Label>Mobile Number OTP</Label>
            <Input type="text" />
            <NewButton disabled>Verify</NewButton>
            <TextContent>
              Didn't get OTP ?<a href="#"> Resend </a>
            </TextContent>
          </FormGroup>
        </Center>
      </BoxWrapper>
    </PageContainer>
  );
};

export default Register;
