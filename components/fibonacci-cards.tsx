export type DisplayVal = number | "?" | "∞" | "Defer" | "Coffee";

export interface DisplayData {
  value: DisplayVal;
  display: string;
}

const SEQUENCE = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

export const colors = ["#E05557", "#FFBA00", "#00B6F0"];

export function createData(): DisplayData[] {
  const f: DisplayData[] = Array.from(new Set(SEQUENCE)).map((fn: number) => ({
    value: fn,
    display: fn.toString(),
  }));

  return [
    ...f,
    {
      value: "?",
      display: "?",
    },
    {
      value: "∞",
      display: "∞",
    },
    {
      value: "Defer",
      display: "➳",
    },
    {
      value: "Coffee",
      display: "☕️",
    },
  ];
}
