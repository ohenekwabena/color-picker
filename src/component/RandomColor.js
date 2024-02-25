import { useState } from "react";
import styled from "styled-components";
import UnstyledButton from "./UnstyledButton";

function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomColor(colorType) {
    if (colorType === "hex") {
      const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let hexColor = "#";

      for (let i = 0; i < 6; i++) {
        hexColor += hex[randomUtility(hex.length)];
      }
      setColor(hexColor);
    }

    if (colorType === "rgb") {
      const r = randomUtility(256);
      const g = randomUtility(256);
      const b = randomUtility(256);

      setColor(`rgb(${r}, ${g}, ${b})`);
    }
    if (colorType === "hsl") {
      const h = randomUtility(360);
      const s = randomUtility(100);
      const l = randomUtility(100);

      setColor(`hsl(${h}, ${s}%, ${l}%)`);
    }
  }

  return (
    <Wrapper>
      <InnerWrapper>
        <ColorWheel color={color}>
          <p>{color}</p>
        </ColorWheel>
        <ButtonGroup>
          <ColorButton onClick={() => setColorType("rgb")}>RGB</ColorButton>
          <ColorButton onClick={() => setColorType("hex")}>HEX</ColorButton>
          <ColorButton onClick={() => setColorType("hsl")}>HSL</ColorButton>
          <ColorButton onClick={() => handleCreateRandomColor(colorType)}>Random Color</ColorButton>
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
`;

const ColorWheel = styled.div`
  width: 400px;
  height: 400px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    font-size: 1.5rem;
    background-color: oldlace;
    padding: 6px 10px;
    border-radius: 12px;
  }
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
