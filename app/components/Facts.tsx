import { useFacts } from "../hooks/useFacts";

export function Facts() {
  const facts = useFacts("malaysia");

  console.log({ facts });

  return facts;
}
