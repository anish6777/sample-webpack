import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  background: rgba(255, 255, 255, 0.8);
`;

export const BoxWrapper = styled.div`
  max-width: ${props => props.width || 700}px;
  min-height: ${props => props.height || 500}px;
  max-height: ${props => props.height || 500}px;
  position: relative;
  width: 100%;
  height: 100%;
  margin: auto;
  background: white;
  border: 5px solid #6a7a45;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const SplitBox = styled.div`
  content: "";
  position: absolute;
  left: 50%;
  height: 90%;
  margin: auto;
  border-left: 1px solid #6a7a45;
  transform: translate(-50%);
`;

export const HeaderContainer = styled.div`
  background: #6a7a45;
  min-height: 30px;
  color: white;
  text-align: center;
  margin: auto;
`;

export const FormGroup = styled.div`
  margin: 20px;
`;

export const SignBoard = styled.div`
  position: relative;
  background: #6a7a45;
  min-height: 30px;
  width: 200px;
  color: white;
  text-align: center;
  border-bottom: 5px solid #6a7a45;
  border-left: 5px solid #6a7a45;
  border-right: 5px solid #6a7a45;
  border-radius: 0px 0px 10px 10px;
  margin: auto;
`;

export const HeaderText = styled.h4`
  text-align: center;
  margin: auto;
  padding: 10px;
  font-size: 16px;
`;

export const CenterText = styled.div`
  padding: 30px;
  font-size: 15px;
  background: white;
  color: #6a7a45;
  text-align: center;
`;

export const Input = styled.input`
  display: block;
  border: none;
  border-bottom: 1px solid #6a7a45;
  width: 98%;
  margin: 5px;
`;

export const Label = styled.label`
  color: #6a7a45;
  font-size: 15px;
  padding: 8px;
`;

export const TextContent = styled.p`
  font-size: 14px;
  display: block;
  padding: 10px;
`;

export const Button = styled.button`
  padding: 10px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border: 1px solid #6a7a45;
  border-radius: 12px;
  box-shadow: none;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  background-color: white;
  color: #6a7a45;
  &:hover {
    background-color: ${props => (props.disabled ? "white" : "#6a7a45")};
    color: ${props => (props.disabled ? "#b2beb5" : "white")};
  }
  &:disabled {
    border: 1px solid #b2beb5;
    color: #b2beb5;
  }
`;

export const InlineButton = styled.button`
  padding: 10px 22px;
  background-color: white;
  color: #6a7a45;
  &:hover {
    background-color: #6a7a45;
    color: white;
  }
`;
