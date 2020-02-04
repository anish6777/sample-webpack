import React from "react";
import styled from "styled-components";

import {
  BoxWrapper,
  PageContainer,
  HeaderContainer,
  SplitBox,
  HeaderText,
  SignBoard,
  CenterText,
  Input,
  Label,
  Button,
  TextContent
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
          <HeaderText>User Registration</HeaderText>
        </SignBoard>
        <Center>
          <Label>UserName</Label>
          <Input type="text" />
          <Label>Mobile Number</Label>
          <Input type="number" />
          <Label>Password</Label>
          <Input type="password" />
          <AlignCenter>
            <NewButton>Register as customer</NewButton>

            <NewButton>Register as trader</NewButton>
          </AlignCenter>
        </Center>
      </BoxWrapper>
    </PageContainer>
  );
};

export default Register;

const FormContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 50px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: rgba(255, 255, 255, 0.8);
`;

const FormWrapper = styled.div`
  width: 500px;
  background: #6a7a45;
  background: -webkit-linear-gradient(45deg, #56ab2f, #6a7a45);
  background: -o-linear-gradient(45deg, #56ab2f, #6a7a45);
  background: -moz-linear-gradient(45deg, #56ab2f, #6a7a45);
  background: linear-gradient(45deg, #56ab2f, #6a7a45);
  border-radius: 10px;
  overflow: hidden;
  padding: 72px 55px 65px 55px;
`;

const RegisterForm = styled.form`
  width: 100%;
`;
const ButtonContainer = styled.div`
  padding-top: 23px;
`;
const FormTitle = styled.span`
  display: block;
  font-family: Poppins-Bold;
  font-size: 39px;
  color: #fff;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 70px;
`;

const FormRadio = styled.span`
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 37px;
`;

const RadioInput = styled.input`
  display: none;
`;

const SubmitButton = styled.button`
  font-family: Poppins-Medium;
  font-size: 16px;
  color: #555555;
  line-height: 1.2;
  text-transform: uppercase;

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  min-width: 120px;
  height: 50px;
  border-radius: 2px;
  position: relative;
  z-index: 1;
  background: #80c64a;
  background: -webkit-linear-gradient(-135deg, #56ab2f, #a8e063);
  background: -o-linear-gradient(-135deg, #56ab2f, #a8e063);
  background: -moz-linear-gradient(-135deg, #56ab2f, #a8e063);
  background: linear-gradient(-135deg, #56ab2f, #a8e063);

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
`;

const RadioLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  font-family: Poppins-Medium;
  font-size: 18px;
  color: #fff;
  line-height: 1.2;
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.5);
    background: rgba(0, 0, 0, 0.1);
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
  }
`;

const FormInput = styled.div`
  width: 100%;
  position: relative;
  border-bottom: 2px solid rgba(255, 255, 255, 0.24);
  margin-bottom: 27px;
`;

const FormInputSelect = styled.div`
  width: 100%;
  position: relative;
  border-bottom: 2px solid rgba(255, 255, 255, 0.24);
  margin-bottom: 27px;
  display: none;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  background: transparent;
  font-family: Poppins-Regular;
  font-size: 15px;
  color: #fff;
  line-height: 1.2;
  padding: 0 5px;
`;

const StyledTextArea = styled.textarea`
  display: block;
  width: 100%;
  background: transparent;
  font-family: Poppins-Regular;
  font-size: 15px;
  color: #fff;
  line-height: 1.2;
  padding: 0 5px;
`;

const FocusSpan = styled.span`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
`;
