import * as React from 'react';

interface CardProps {
  color: string;
  onTap(): void;
}

export default (props: React.PropsWithChildren<CardProps>) =>
  React.createElement(
    'div',
    {
      onClick: props.onTap,
      style: {
        textAlign: 'center',
        fontSize: '32px',
        cursor: 'pointer',
        fontWeight: '300',
        lineHeight: '1',
        width: '84px',
        boxShadow:
          '0 0 4px rgba(0, 0, 0, 0.035), 0 4px 8px rgba(0, 0, 0, 0.07)',
        background: props.color,
        color: 'white',
        marginLeft: '8px',
        marginRight: '8px',
        borderRadius: '4px',
        padding: '40px 8px',
      },
    },
    props.children,
  );
