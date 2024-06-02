import styled from "styled-components";

const Input = styled.input`
  justify-self: center;
  border: none;
  padding: 1.1rem 1.6rem;
  font-size: 1.8rem;
  border-radius: 0.7rem;
  width: 40rem;
  transition: all 0.3s;
  color: var(--color-text);
  background-color: var(--color-primary-light);

  &::placeholder {
    color: var(--color-text-dark);
  }

  &:focus {
    outline: none;
    box-shadow: 0 2.4rem 2.4rem var(--color-black-transparent-10);
    transform: translateY(-2px);
  }
`;

export default Input;
