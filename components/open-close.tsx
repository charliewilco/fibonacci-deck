import * as React from 'react';

interface OpenCloseProps {
  open: boolean;
  onClick: (x: any) => void;
}

const Chevron: React.FC<OpenCloseProps> = ({open, onClick}) => (
  <button className="Chevron" onClick={onClick}>
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

export default Chevron;
