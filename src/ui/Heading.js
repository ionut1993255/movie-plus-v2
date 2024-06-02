import styled, { css } from "styled-components";

const headingBaseStyles = css`
  font-size: 2.4rem;
`;

const Heading = styled.h1`
  ${({ as, className }) => {
    switch (as) {
      case "h1":
        return css`
          ${headingBaseStyles}
          font-weight: 600;
          color: var(--color-text);
        `;
      case "h2":
        if (className === "watched-summary-heading") {
          return css`
            text-transform: uppercase;
            font-size: 1.6rem;
            margin-bottom: 0.6rem;
          `;
        } else {
          return css`
            ${headingBaseStyles}
            margin-bottom: 0.4rem;
            line-height: 1.1;
          `;
        }
      case "h3":
        return css`
          font-size: 1.8rem;
        `;
      default:
        return null;
    }
  }}
`;

export default Heading;
