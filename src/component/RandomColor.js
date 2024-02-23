import { useState } from "react";
import styled from "styled-components";
import UnstyledButton from "./UnstyledButton";

function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  return (
    <Wrapper>
      <InnerWrapper>
        <ColorWheel color={color}></ColorWheel>
        <ButtonGroup>
          <ColorButton>RGB</ColorButton>
          <ColorButton>HEX</ColorButton>
          <ColorButton>Random Color</ColorButton>
        </ButtonGroup>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;

  @media (max-width: 400px) {
    grid-template-rows: 1fr auto;
  }
`;

const ColorWheel = styled.div`
  width: 400px;
  height: 400px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  gap: 16px;
`;

const ColorButton = styled(UnstyledButton)`
  background: paleturquoise;
  text-align: center;
  padding: 10px;
  border-radius: 6px;
  max-width: 150px;
  font-weight: 700;
`;
export default RandomColor;
