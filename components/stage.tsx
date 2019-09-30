import * as React from 'react';
import {DisplayVal} from './data';

interface StageProps {
  display?: DisplayVal;
  color: string;
}

export default (props: React.PropsWithChildren<StageProps>) => (
  <div
    style={{
      color: props.color,
      margin: 'auto',
      fontWeight: 600,
      fontSize:
        props.display === 'Coffee' || props.display === 'Defer'
          ? '5rem'
          : '12rem',
    }}>
    {props.children}
  </div>
);
