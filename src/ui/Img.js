import styled, { css } from "styled-components";

const StyledImg = styled.img`
  ${({ $variant }) => {
    switch ($variant) {
      case "logo":
        return css`
          width: 6rem;
          margin-bottom: 6px;
        `;
      case "movie-details":
        return css`
          width: 33%;
        `;
      default:
        return css`
          width: 100%;
          grid-row: 1 / -1;
        `;
    }
  }}
`;

function Img({ src, alt, variant }) {
  return <StyledImg src={src} alt={alt} $variant={variant} />;
}

export default Img;
