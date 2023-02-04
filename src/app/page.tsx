import { getSequence } from "../lib/get-sequence";
import { Deck } from "../components/deck";

export default async function Index() {
  const data = await getSequence();

  return <Deck fibonacci={data} />;
}
