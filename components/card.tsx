import * as React from 'react';

interface CardProps {
  onTap(): void;
}

export default function Card(props: React.PropsWithChildren<CardProps>) {
  return React.createElement(
    'button',
    {
      className: 'Card',
      onClick: props.onTap,
    },
    props.children,
  );
}
