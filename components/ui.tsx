import { useContext } from "react";
import { DisplayContext } from "./display-context";
import { DisplayData } from "./fibonacci-cards";

export const Stage = () => {
  const [display] = useContext(DisplayContext);
  return !display ? (
    <p className="Intro">Tap a Card Below</p>
  ) : (
    <header
      className="Stage"
      style={{
        fontSize: display === "Coffee" || display === "Defer" ? 80 : 192,
      }}
    >
      {display}
    </header>
  );
};

export const Tray = ({ cards }: { cards: DisplayData[] }) => {
  return (
    <div className="Tray">
      {cards.map((d, idx) => {
        return <Card key={idx} datum={d} />;
      })}
    </div>
  );
};

interface CardProps {
  datum: DisplayData;
}

export const Card = ({ datum }: CardProps) => {
  const [, setDisplay] = useContext(DisplayContext);
  const onTap = () => setDisplay(datum.value);
  return (
    <button className="Card" onClick={onTap}>
      {datum}
    </button>
  );
};

interface OpenCloseProps {
  open: boolean;
  onClick: (x: any) => void;
}

const DOWN_POLYLINE = "6 9 12 15 18 9";
const UP_POLYLINE = "18 15 12 9 6 15";

export const ArrowIcon = ({ open, onClick }: OpenCloseProps) => (
  <button
    className="Chevron"
    onClick={onClick}
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
      <polyline points={open ? DOWN_POLYLINE : UP_POLYLINE} />
    </svg>
  </button>
);
