import * as React from 'react';

interface WrapperProps {
  open: boolean;
}

export default (props: React.PropsWithChildren<WrapperProps>) => (
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
