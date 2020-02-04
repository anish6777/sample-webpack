import React from "react";
import styled from "styled-components";
import { SearchAlt2 } from "styled-icons/boxicons-regular";

const ColorIcon = styled(SearchAlt2)`
  color: white;
`;

const SearchBar = props => {
  return (
    <>
      <Wrap>
        <Bar>
          <Input type="text" placeholder="What are you looking for?" />
          <Button type="submit">
            <ColorIcon />
          </Button>
        </Bar>
      </Wrap>
    </>
  );
};

export default SearchBar;

const Wrap = styled.div`
  width: 30%;
  position: absolute;
  margin: 5px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Bar = styled.div`
  width: 98%;
  position: relative;
  display: flex;
`;
const Input = styled.input`
  width: 100%;
  border: 1px solid #6a7a45;
  border-right: none;
  padding: 5px;
  height: 36px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #6a7a45;
`;

const Button = styled.button`
  width: 40px;
  height: 36px;
  border: 1px solid #6a7a45;
  background: #6a7a45;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
`;
