export type DisplayVal = number | "?" | "∞" | "Defer" | "Coffee";

export interface DisplayData {
  value: DisplayVal;
  display: string;
}

const SEQUENCE = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

// const colors = ["#E05557", "#FFBA00", "#00B6F0"];

function toDisplayData(n: number): DisplayData {
  return {
    value: n,
    display: n.toString(),
  };
}

export function createFibSequence(): DisplayData[] {
  let s = new Set(SEQUENCE);
  let f: DisplayData[] = [...s].map(toDisplayData);

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

export async function getSequence(): Promise<DisplayData[]> {
  return Promise.resolve(createFibSequence());
}
