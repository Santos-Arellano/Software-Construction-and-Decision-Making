"use client";
import { useChat } from "ai/react"; // Importa el hook useChat de la biblioteca ai/react

function HomePage() {
    // Utiliza el hook useChat para obtener funciones y datos relacionados con el chat

  const { handleInputChange,input,  handleSubmit, messages, isLoading } = useChat();


    return (
      // Contenedor principal del componente con estilos aplicados usando Tailwind CSS
      <section className="flex justify-center items-center h-screen  text-white">
        {/* Formulario para enviar mensajes */}
        <form className="max-w-xl w-full" onSubmit={handleSubmit}>
          {/* Contenedor para los mensajes */}
          <div className="max-h-96 h-full overflow-y-auto">
            {/* Div para hacer scroll de los mensajes */}
            <div className="h-full overflow-y-scroll">
              {/* Mapeo de los mensajes para mostrar cada uno */}
              {messages.map((m) => (
                // Div para cada mensaje con estilos dinámicos basados en el rol del remitente
                <div
                  key={m.id} // Clave única para cada mensaje
                  className={`mb-2 p-2 rounded-md ${
                    m.role === "assistant" ? "self-end bg-gray-700" : "self-start bg-green-800"
                  }`}
                >
                  {/* Etiqueta para mostrar el rol del remitente */}
                  <span className="text-xs font-bold">
                    {m.role}
                  </span>
                  {/* Párrafo para mostrar el contenido del mensaje */}
                  <p className="text-sm">{m.content}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Controles para enviar mensajes */}
          <div className="flex justify-between my-4">
            {/* Etiqueta para indicar al usuario que escriba un mensaje */}
            <label className="block font-bold my-2">
              Say something....
            </label>
            {/* Botón para enviar mensajes */}
            <button className="bg-green-700 text-white px-3 py-2 rounded-md focus:outline-none disabled:opacity-50" disabled={isLoading || !input}>
              Send
            </button>
          </div>
          {/* Área de texto para que el usuario escriba su mensaje */}
          <textarea
            rows={4}
            placeholder="Type your message here...."
            className="text-white bg-gray-800 px-3 py-2 w-full rounded-md focus:outline-none"
            onChange={handleInputChange} // Manejador de eventos para cambiar el valor del input
          ></textarea>
        </form>
      </section>
    );
  }
  
  export default HomePage; // Exporta el componente HomePage como predeterminado
  