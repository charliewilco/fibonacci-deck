import React from "react";
import Head from "next/head";

const ColorMeta = ({ color }) => (
  <Head>
    {(color === "#FFBA00" || color === null) && (
      <meta name="theme-color" content="#FFBA00" />
    )}
    {color === "#00B6F0" && <meta name="theme-color" content="#00B6F0" />}
    {color === "#E05557" && <meta name="theme-color" content="#E05557" />}
  </Head>
);

export default ColorMeta;
