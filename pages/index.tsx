import { useState } from "react";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

type DisplayVal = number | "?" | "∞" | "Defer" | "Coffee";

interface DisplayData {
  value: DisplayVal;
  display: string;
}

const SEQUENCE = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

// const colors = ["#E05557", "#FFBA00", "#00B6F0"];

function createData(): DisplayData[] {
  const f: DisplayData[] = Array.from(new Set(SEQUENCE)).map((fn: number) => ({
    value: fn,
    display: fn.toString(),
  }));

  return [
    ...f,
    {
      value: "?",
      display: "?",
    },
    {
      value: "∞",
      display: "∞",
    },
    {
      value: "Defer",
      display: "➳",
    },
    {
      value: "Coffee",
      display: "☕️",
    },
  ];
}

export const getStaticProps: GetStaticProps<{
  data: DisplayData[];
}> = async () => {
  return {
    props: {
      data: createData(),
    },
    revalidate: false,
  };
};

const Index = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [display, setDisplay] = useState<DisplayVal | null>(null);
  const points = isOpen ? "6 9 12 15 18 9" : "18 15 12 9 6 15";
  return (
    <main>
      <Head>
        <title>Fibonacci</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="FlexDisplay">
        <div className="DisplayWrapper">
          {!display ? (
            <p className="Intro">Tap a Card Below</p>
          ) : (
            <header
              className="Stage"
              style={{
                fontSize:
                  display === "Coffee" || display === "Defer" ? 80 : 192,
              }}
            >
              {display}
            </header>
          )}

          <button
            className="Chevron"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
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
        </div>
        <div
          className="Tray"
          id="tray"
          aria-labelledby="tray-button"
          aria-expanded={isOpen}
        >
          {data.map((d, idx) => {
            const onTap = () => setDisplay(d.value);
            return (
              <button key={idx} className="Card" onClick={onTap}>
                {d.display}
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Index;
