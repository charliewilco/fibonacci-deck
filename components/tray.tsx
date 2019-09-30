import * as React from 'react';

export default function Tray(props: React.PropsWithChildren<{}>) {
  return (
    <div
      style={{
        display: 'block',
        position: 'fixed',
        whiteSpace: 'nowrap',
        overflowX: 'auto',
        background: '#063651',
        padding: '16px',
        left: '0',
        right: '0',
        WebkitOverflowScrolling: 'touch',
        msOverflowStyle: '-ms-autohiding-scrollbar',
      }}>
      {props.children}
    </div>
  );
}
