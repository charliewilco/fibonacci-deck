import * as React from 'react';

export default function Container(props: React.PropsWithChildren<{}>) {
  return (
    <div style={{height: '100%', fontFamily: 'Hind, sans-serif'}}>
      {props.children}
    </div>
  );
}
