import { useCallback } from "react";
import type { DisplayVal } from "../lib/get-sequence";

interface CardButtonProps {
  id: DisplayVal;
  display: string;
  onTap(id: DisplayVal): void;
}

export function CardButton(props: CardButtonProps) {
  let handleTap = useCallback(() => {
    props.onTap(props.id);
  }, [props]);
  return (
    <button className="Card" onClick={handleTap}>
      {props.display}
    </button>
  );
}
