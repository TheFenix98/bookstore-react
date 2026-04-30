import { useRef } from "react";
import { toast } from "sonner"

const Contacto = () => {

  const yaEnviado = useRef(false);


  const handleSubmit = async (e) => {
    e.preventDefault()
    toast.success("Mensaje enviado con éxito")

    const form = e.target;

    const asunto = form.asunto.value.trim();
    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();

    if (!asunto || !nombre || !email || !mensaje) {
      toast.error("Por favor, complete todos los campos");
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido.test(email)) {
      toast.error("Por favor, ingrese un email válido");
      return;
    }


    if (yaEnviado.current) return;
    yaEnviado.current = true;
  

    const formdata = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/benjamincoronel98@hotmail.com",
        {
          method: "POST",
          body: formdata,
        }
      );

      if (response.ok) {
        toast.success("Mensaje enviado con éxito");
        form.reset();
      } else {
        toast.error("Error al enviar el mensaje");
      }
    } catch (error) {
      toast.error("Error al enviar el mensaje");
    }

    yaEnviado.current = false;
  };

  return (
    <div className="justify-center p-8 text-white flex flex-col md:grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="w-full">
        <h1 className="text-3xl font-bold mb-4">Contacto</h1>
        <h2 className="text-2xl font-semibold mb-4">Formulario</h2>
          <form
            onSubmit={handleSubmit}
           className="flex flex-col gap-4">
            <input name="asunto" type="text" placeholder="Asunto" className="p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input name="nombre" type="text" placeholder="Nombre" className="p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input name="email" type="email" placeholder="Email" className="p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea name="mensaje" placeholder="Tu Mensaje" className="p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"></textarea>
            <button  type="submit" className="bg-green-500 hover:bg-green-700 items-center text-white font-bold py-2 px-4 rounded">
              Enviar
            </button>
          </form>
        </div>
        <div>
            <h2 className="text-2xl font-semibold mb-4 mt-8">Información de Contacto</h2>
            <h3>Whatsaap:</h3>
            <p className="text-gray-400 mb-2">+54 358 431-6114</p>
            <h3>Email:</h3>
            <p className="text-gray-400 mb-2">contacto@bookstore.com</p>
        </div>
    </div>
  )
}


export default Contacto