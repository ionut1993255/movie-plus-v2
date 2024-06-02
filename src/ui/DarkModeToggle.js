import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

import Button from "./Button";

import { useDarkMode } from "../contexts/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <Button
      type="theme-switch"
      isDarkMode={isDarkMode}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </Button>
  );
}

export default DarkModeToggle;
