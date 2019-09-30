import * as React from 'react';

interface WrapperProps {
  open: boolean;
}

export default function Wrapper(props: React.PropsWithChildren<WrapperProps>) {
  return (
    <div
      style={{
        display: 'flex',
        background: '#092e41',
        position: 'relative',
        alignItems: 'center',
        height: !props.open ? '100%' : 'calc(100% - 144px)',
      }}>
      {props.children}
    </div>
  );
}
