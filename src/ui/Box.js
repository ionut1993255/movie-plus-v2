import styled from "styled-components";
import { useState } from "react";

import Button from "./Button";

const StyledBox = styled.div`
  width: 42rem;
  max-width: 42rem;
  background-color: var(--color-background-500);
  border-radius: 0.9rem;
  position: relative;
  overflow: auto;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px var(--color-black-transparent-30);
    background-color: var(--color-background-900);
  }

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-background-100);
    cursor: pointer;
  }
`;

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <StyledBox>
      <Button type="toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </Button>

      {isOpen && children}
    </StyledBox>
  );
}

export default Box;
