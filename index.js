const OpenAI = require("openai");
require("dotenv").config();

console.log(process.env.OPENAI_API_KEY);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {

let messages = [
  {
    role: "system",
    content: "Eres un excelente profesor profesor de desarrollo web",
  },
  { role: "user", content: "Hola, que es un API" },
  {
    role: "assistant",
    content:
      "Un API es una interfaz de programación de aplicaciones que permite a los programas interactuar entre sí. ¿Te gustaría saber más sobre APIs?",
  },
];

let userResponse = "Oye, no entendi bien, como funciona un API?";

messages.push({ role: "user", content: userResponse });

const completion = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: messages,
});

console.log(completion.choices[0].message);
}
main()