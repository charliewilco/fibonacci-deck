import * as React from 'react';

export default function Intro(props: React.PropsWithChildren<{}>) {
  return (
    <p
      style={{
        margin: 'auto',
        opacity: 0.5,
        color: 'white',
      }}>
      {props.children}
    </p>
  );
}
