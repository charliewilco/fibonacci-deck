import { useState, useCallback } from "react";
import type { GetStaticProps } from "next";
import Head from "next/head";
import {
  createFibSequence,
  type DisplayData,
  type DisplayVal,
} from "../lib/get-sequence";
import { CardButton } from "../components/card";
import { Stage } from "../components/stage";
import { ChevronButton } from "../components/chevron";

interface IndexProps {
  data: DisplayData[];
}

export let getStaticProps: GetStaticProps<IndexProps> = async () => {
  let data = createFibSequence();
  return {
    props: {
      data,
    },
    revalidate: false,
  };
};

export default function Index({ data }: IndexProps) {
  let [isOpen, setIsOpen] = useState<boolean>(true);
  let [display, setDisplay] = useState<DisplayVal | null>(null);

  let handleToggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <main>
      <Head>
        <title>Fibonacci</title>
        <link rel="stylesheet" href="/style.css" />
      </Head>
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
          {data.map((d, idx) => {
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
    </main>
  );
}
