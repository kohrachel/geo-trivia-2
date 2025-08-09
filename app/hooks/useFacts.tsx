export const useFacts = async (countryName: string) => {
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4.1",
      input: "Tell me a three sentence bedtime story about a unicorn.",
    }),
  });
  const json = await response.json();

  console.log({ json });

  return json;
};
