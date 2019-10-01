import * as React from 'react';

interface CardProps {
  onTap(): void;
}

const SPACING = {
  y: 40,
  x: 8,
};

export default function Card(props: React.PropsWithChildren<CardProps>) {
  return React.createElement(
    'button',
    {
      className: 'Card',
      onClick: props.onTap,
      style: {
        appearance: 'none',
        fontFamily: 'inherit',
        display: 'inline-block',
        textAlign: 'center',
        fontSize: 32,
        cursor: 'pointer',
        fontWeight: 300,
        background: 'none',
        lineHeight: 1,
        width: 84,
        boxShadow:
          '0 0 4px rgba(0, 0, 0, 0.035), 0 4px 8px rgba(0, 0, 0, 0.07)',
        marginLeft: SPACING.x,
        marginRight: SPACING.x,
        borderRadius: 4,
        paddingTop: SPACING.y,
        paddingBottom: SPACING.y,
        paddingLeft: SPACING.x,
        paddingRight: SPACING.x,
      },
    },
    props.children,
  );
}
