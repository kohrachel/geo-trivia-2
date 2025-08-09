import { Facts } from "./Facts";

export default async function Temp() {
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4.1",
      input: "Give ",
    }),
  });
  const json = await response.json();

  console.log({ json });
  return <div>hi</div>;
}
