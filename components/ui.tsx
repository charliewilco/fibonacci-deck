import { useContext, useState } from "react";
import { Display, DisplayContext } from "./display-context";
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

export const Tray = ({
  cards,
  open,
}: {
  cards: DisplayData[];
  open: boolean;
}) => {
  return (
    <div
      className="Tray"
      id="tray"
      aria-labelledby="tray-button"
      aria-expanded={open}
    >
      {cards.map((d, idx) => (
        <Card key={idx} datum={d} />
      ))}
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
      {datum.display}
    </button>
  );
};

interface OpenCloseProps {
  open: boolean;
  onClick: (x: any) => void;
}

export const ArrowIcon = ({ open, onClick }: OpenCloseProps) => {
  const points = open ? "6 9 12 15 18 9" : "18 15 12 9 6 15";
  return (
    <button
      className="Chevron"
      onClick={onClick}
      aria-expanded={open}
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
};

interface UIProps {
  data: DisplayData[];
}

export const FibonacciUI = ({ data }: UIProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const style: React.CSSProperties = {
    height: !isOpen ? "100%" : "calc(100% - 144px)",
  };

  return (
    <Display>
      <div className="DisplayWrapper" style={style}>
        <Stage />
        <ArrowIcon open={isOpen} onClick={() => setIsOpen((prev) => !prev)} />
      </div>
      <Tray cards={data} open={isOpen} />
    </Display>
  );
};
