import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { FibonacciUI } from "../components/ui";
import { DisplayData, createData } from "../components/fibonacci-cards";

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
  return (
    <main>
      <Head>
        <title>Fibonacci</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FibonacciUI data={data} />
    </main>
  );
};

export default Index;
