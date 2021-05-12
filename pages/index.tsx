import * as React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

import { ArrowIcon, Tray, Stage } from "../components/ui";
import { DisplayData, createData } from "../components/fibonacci-cards";
import { Display } from "../components/display-context";

export const getStaticProps: GetStaticProps<{ data: DisplayData[] }> =
  async () => {
    return {
      props: {
        data: createData(),
      },
      revalidate: false,
    };
  };

export default function Index(
  props: InferGetStaticPropsType<typeof getStaticProps>
): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const style: React.CSSProperties = {
    height: !isOpen ? "100%" : "calc(100% - 144px)",
  };
  return (
    <Display>
      <main>
        <Head>
          <title>Fibonacci</title>
          <link rel="icon" href="static/favicon.ico" />
        </Head>
        <div className="DisplayWrapper" style={style}>
          <Stage />
          <ArrowIcon open={isOpen} onClick={() => setIsOpen((prev) => !prev)} />
        </div>
        {isOpen && <Tray cards={props.data} />}
      </main>
    </Display>
  );
}
