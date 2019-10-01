import React from 'react';
import CoffeePotIcon from './coffee';

export type DisplayVal = number | '?' | '∞' | 'Defer' | 'Coffee';

interface DisplayData {
  value: DisplayVal;
  display: string | React.ReactNode;
}

const fib: DisplayData[] = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144].map(
  (fn: number) => ({value: fn, display: fn.toString()}),
);

export const colors = ['#E05557', '#FFBA00', '#00B6F0'];

const data: DisplayData[] = [
  {
    value: 0,
    display: '0',
  },
  ...fib,
  {
    value: '?',
    display: '?',
  },
  {
    value: '∞',
    display: '∞',
  },
  {
    value: 'Defer',
    display: '➳',
  },
  {
    value: 'Coffee',
    display: (
      <CoffeePotIcon
        style={{margin: '-5px 0 -5px', display: 'inline-block'}}
        alt="coffee pot"
      />
    ),
  },
];

export default data;
