import styled from "styled-components";

import Button from "./Button";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const StyledConfirmDelete = styled.div`
  width: 48rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({ resourceName, onConfirm, onCloseModal }) {
  return (
    <StyledConfirmDelete>
      <Heading as="h2">Delete {resourceName}</Heading>

      <Paragraph className="confirm-delete">
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </Paragraph>

      <div>
        <Button type="primary" onClick={onCloseModal}>
          Cancel
        </Button>

        <Button
          type="danger"
          className="light-mode-special-button-colors"
          onClick={onConfirm}
        >
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
