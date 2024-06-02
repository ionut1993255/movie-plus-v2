import styled, { css } from "styled-components";

const paragraphBaseStyles = css`
  text-align: center;
  font-size: 2rem;
`;

const Paragraph = styled.p`
  ${({ className, color, size }) => {
    switch (className) {
      case "num-results":
        return css`
          justify-self: end;
          font-size: 1.8rem;
        `;
      case "star-rating-text":
        return css`
          line-height: 1;
          margin: 0;
          color: ${color};
          font-size: ${size / 1.5}px;
        `;
      case "confirm-delete":
        return css`
          color: var(--color-text);
          margin-bottom: 1.2rem;
          font-size: 1.9rem;
        `;
      case "loader":
        return css`
          ${paragraphBaseStyles}
          text-transform: uppercase;
          font-weight: 600;
          margin: 4.8rem;
        `;
      case "error":
        return css`
          ${paragraphBaseStyles}
          padding: 4.8rem;
        `;
      default:
        return css`
          display: flex;
          align-items: center;
          gap: 0.8rem;
        `;
    }
  }}
`;

export default Paragraph;
