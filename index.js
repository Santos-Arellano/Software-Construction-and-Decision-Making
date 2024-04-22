const OpenAI = require("openai");
require ("dotenv").config();

console.log(process.env.OPENAI_API_KEY);

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

let messages = [
    {role:"system"},
    {role:"user"},
    {role:"assistant"},
]