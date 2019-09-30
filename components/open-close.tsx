import * as React from 'react';

interface OpenCloseProps {
  open: boolean;
  onClick: (x: any) => void;
}

const OpenClose: React.FC<OpenCloseProps> = ({open, onClick}) => (
  <button
    style={{
      appearance: 'none',
      background: 'none',
      display: 'block',
      cursor: 'pointer',
      border: 0,
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: 8,
      textAlign: 'right',
    }}
    onClick={onClick}>
    <img
      src={
        open
          ? 'https://icon.now.sh/chevronDown/CCC'
          : 'https://icon.now.sh/chevronUp/CCC'
      }
      alt="down icon"
    />
  </button>
);

export default OpenClose;
