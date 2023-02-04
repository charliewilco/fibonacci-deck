import { useMemo } from "react";

interface ChevronButtonProps {
  isOpen: boolean;
  onToggle(): void;
}

export function ChevronButton(props: ChevronButtonProps) {
  let points = useMemo(
    () => (props.isOpen ? "6 9 12 15 18 9" : "18 15 12 9 6 15"),
    [props.isOpen]
  );

  return (
    <button
      className="Chevron"
      onClick={props.onToggle}
      aria-expanded={props.isOpen}
      id="tray-button"
      aria-controls="tray"
      aria-label="Open or Close the Card Tray"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points={points} />
      </svg>
    </button>
  );
}
