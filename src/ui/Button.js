import styled, { css } from "styled-components";

const commonButtonStyles = css`
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.8rem 2.4rem;
  border-radius: 10rem;
  cursor: pointer;
`;

const buttonBaseStyles = css`
  border: none;
  font-weight: bold;
  cursor: pointer;
  z-index: 999;
  transition: all 0.3s;
`;

const buttonAbsoluteStyles = css`
  ${buttonBaseStyles}
  position: absolute;
  aspect-ratio: 1;
  border-radius: 50%;
`;

const StyledButton = styled.button`
  ${({ type, className, isDarkMode }) => {
    switch (type) {
      case "primary":
        return css`
          ${commonButtonStyles}
          color: var(--color-text);
          background-color: var(--color-background-100);
          border: 1px solid var(--color-text);
          margin: 0 0.8rem;

          &:hover {
            color: var(--color-background-100);
            background-color: var(--color-text);
          }
        `;
      case "danger":
        if (className === "light-mode light-mode-special-button-colors")
          return css`
            color: var(--color-text);
          `;

        return css`
          ${commonButtonStyles}
          color: var(--color-text);
          background-color: var(--color-red);
          border: 1px solid var(--color-red-dark);

          &:hover {
            background-color: var(--color-red-dark);
          }
        `;
      case "add":
        if (className === "light-mode light-mode-special-button-colors")
          return css`
            color: var(--color-text);
          `;

        return css`
          ${buttonBaseStyles}
          background-color: var(--color-primary);
          color: var(--color-text);
          border-radius: 10rem;
          font-size: 1.4rem;
          padding: 1rem;

          &:hover {
            background-color: var(--color-primary-light);
          }
        `;
      case "delete":
        return css`
          ${buttonAbsoluteStyles}
          right: 2.4rem;
          font-size: 2.1rem;
          background-color: var(--color-background-500);
          color: var(--color-red);
          outline: none;

          &:hover {
            color: var(--color-red-dark);
          }
        `;
      case "toggle":
        return css`
          ${buttonAbsoluteStyles}
          top: 0.8rem;
          right: 0.8rem;
          height: 2.4rem;
          background-color: var(--color-background-900);
          color: var(--color-text);
          font-size: 1.4rem;
        `;
      case "close":
        return css`
          background: none;
          border: none;
          padding: 0.4rem;
          transform: translateX(0.8rem);
          transition: all 0.2s;
          position: absolute;
          top: 1.2rem;
          right: 1.9rem;
          cursor: pointer;

          & svg {
            width: 2.4rem;
            height: 2.4rem;
            color: var(--color-text);
          }
        `;
      case "back":
        return css`
          ${buttonAbsoluteStyles}
          top: 0.6rem;
          left: 0.6rem;
          height: 3.2rem;
          background-color: var(--color-text);
          color: var(--color-background-500);
          box-shadow: 0 8px 20px var(--color-black-transparent-80);
          font-family: sans-serif;
          font-size: 2.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
        `;
      case "theme-switch":
        return css`
          background-color: var(--color-primary);
          display: flex;
          align-items: center;
          border: none;
          margin-left: 4rem;
          cursor: pointer;

          & svg {
            width: 2.3rem;
            height: 2.3rem;
            color: ${isDarkMode ? "var(--color-star)" : "var(--color-text)"};
            fill: ${isDarkMode ? "var(--color-star)" : "var(--color-text)"};
          }
        `;
      default:
        return null;
    }
  }}
`;

function Button({ children, type, className, isDarkMode, onClick }) {
  return (
    <StyledButton
      type={type}
      className={className}
      isDarkMode={isDarkMode}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
