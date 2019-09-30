import * as React from 'react';

export default (props: React.PropsWithChildren<{}>) => (
  <div style={{height: '100%', fontFamily: 'Hind, sans-serif'}}>
    {props.children}
  </div>
);
