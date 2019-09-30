import * as React from 'react';

export default (props: React.PropsWithChildren<{}>) => (
  <p
    style={{
      margin: 'auto',
      opacity: 0.5,
      color: 'white',
    }}>
    {props.children}
  </p>
);
