import { Configuration, OpenAIApi } from "openai-edge";
import { NextResponse } from "next/server";
import { OpenAIStream, StreamingTextResponse } from "ai"; //esto es para que se pueda leer el stream de la respuesta

const config = new Configuration({
  /* Esto es para configurar la API de OpenAI */
  apiKey:
    process.env.OPENAI_API_KEY /* Aqui se pone la clave de la API de OpenAI */,
});

const openai = new OpenAIApi(
  config
); /* Aqui se crea una instancia de la API de OpenAI */

export async function POST(request: Request) {
  /* Aqui se crea una funcion POST que recibe una peticion */
  const { messages } =
    await request.json(); /* Aqui se obtiene el mensaje de la peticion */

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages,
  });
  const stream = OpenAIStream(response); //esto es para que se pueda leer el stream de la respuesta

  return new StreamingTextResponse(stream); // sirve para que se pueda leer el stream de la respuesta
}
