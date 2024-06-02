import { Toaster } from "react-hot-toast";

const duration = 3000;

const styles = {
  maxWidth: "900px",
  fontSize: "16px",
  fontWeight: 600,
  padding: "16px 24px",
  color: "var(--color-text)",
  backgroundColor: "var(--color-background-100)",
  boxShadow: "0 1.2rem 2.4rem var(--color-black-transparent-20)",
};

function CustomToaster() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        success: {
          duration,
          style: styles,
          iconTheme: {
            secondary: "var(--color-background-100)",
          },
        },
      }}
    />
  );
}

export default CustomToaster;
