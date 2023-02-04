"use client";

import { useState, useCallback } from "react";
import { CardButton } from "./card";
import { Stage } from "./stage";
import { ChevronButton } from "./chevron";
import type { DisplayData, DisplayVal } from "../lib/get-sequence";

interface DeckProps {
  fibonacci: DisplayData[];
}

export function Deck({ fibonacci }: DeckProps) {
  let [isOpen, setIsOpen] = useState<boolean>(true);
  let [display, setDisplay] = useState<DisplayVal | null>(null);

  let handleToggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <div className="FlexDisplay">
      <Stage display={display}>
        <ChevronButton isOpen={isOpen} onToggle={handleToggle} />
      </Stage>
      <div
        className="Tray"
        id="tray"
        aria-labelledby="tray-button"
        aria-expanded={isOpen}
      >
        {fibonacci.map((d, idx) => {
          return (
            <CardButton
              key={idx}
              onTap={setDisplay}
              display={d.display}
              id={d.value}
            />
          );
        })}
      </div>
    </div>
  );
}
