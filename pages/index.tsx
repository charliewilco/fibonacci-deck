import * as React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { FibonacciUI } from "../components/ui";
import { DisplayData, createData } from "../components/fibonacci-cards";

export const getStaticProps: GetStaticProps<{ data: DisplayData[] }> =
  async () => {
    return {
      props: {
        data: createData(),
      },
      revalidate: false,
    };
  };

type IndexProps = InferGetStaticPropsType<typeof getStaticProps>;

const Index = ({ data }: IndexProps): JSX.Element => {
  return (
    <main>
      <Head>
        <title>Fibonacci</title>
        <link rel="icon" href="static/favicon.ico" />
      </Head>
      <FibonacciUI data={data} />
    </main>
  );
};

export default Index;
