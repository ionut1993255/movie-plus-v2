import styled from "styled-components";

import Img from "./Img";
import Heading from "./Heading";

const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

function Logo() {
  return (
    <StyledLogoContainer>
      <Img
        src="/images/movie-plus-logo.png"
        alt="movie-plus-logo"
        variant="logo"
      />

      <Heading as="h1">Movie Plus</Heading>
    </StyledLogoContainer>
  );
}

export default Logo;
