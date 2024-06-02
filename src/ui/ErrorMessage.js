import Paragraph from "./Paragraph";

function ErrorMessage({ message }) {
  return (
    <Paragraph className="error">
      <span>⛔</span> {message}
    </Paragraph>
  );
}

export default ErrorMessage;
