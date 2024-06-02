import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function handleKeyDown(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          e.preventDefault();
          action();
        }
      }

      document.addEventListener("keydown", handleKeyDown);

      return function () {
        document.removeEventListener("keydown", handleKeyDown);
      };
    },
    [action, key]
  );
}
