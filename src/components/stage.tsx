import type { DisplayVal } from "../lib/get-sequence";

interface StageProps {
  display: DisplayVal | null;
  children: React.ReactNode;
}

export function Stage(props: StageProps) {
  return (
    <div className="DisplayWrapper">
      {!props.display ? (
        <p className="Intro">Tap a Card Below</p>
      ) : (
        <header
          className="Stage"
          style={{
            fontSize:
              props.display === "Coffee" || props.display === "Defer"
                ? 80
                : 192,
          }}
        >
          {props.display}
        </header>
      )}

      {props.children}
    </div>
  );
}
