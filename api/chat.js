export default async function handler(req, res) {
  const apiKey = process.env.OPENAI_API_KEY;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a clinical documentation assistant named Progno." },
        { role: "user", content: req.body.prompt }
      ]
    })
  });

  const data = await response.json();
  res.status(200).json({ result: data.choices[0].message.content });
}
