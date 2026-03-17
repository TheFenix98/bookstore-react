const TerminosyCon = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex justify-center px-4 py-10">
      
      <div className="w-full max-w-4xl bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
        
        <h1 className="text-4xl font-bold mb-6 text-center text-white">
          Términos y Condiciones
        </h1>

        <p className="mb-8 text-lg text-gray-300 leading-relaxed text-center">
          Bienvenido a <span className="text-blue-400 font-semibold">Alejandría</span>. 
          Al acceder a nuestro sitio web, aceptas cumplir con los siguientes términos y condiciones.
        </p>

        <div className="space-y-8">
          
          <section className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-4 transition">
            <h2 className="text-2xl font-semibold mb-2 text-blue-400">
              1. Uso del Sitio Web
            </h2>
            <p className="text-gray-300 leading-relaxed">
              El contenido de este sitio web es solo para fines informativos. Nos reservamos el derecho de modificar o eliminar cualquier contenido sin previo aviso. No debes utilizar este sitio web para ningún propósito ilegal o no autorizado.
            </p>
          </section>

          <section className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-4 transition">
            <h2 className="text-2xl font-semibold mb-2 text-blue-400">
              2. Propiedad Intelectual
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Todo el contenido del sitio web, incluyendo texto, imágenes, gráficos y logotipos, es propiedad de Alejandría o de sus licenciantes y está protegido por las leyes de propiedad intelectual.
            </p>
          </section>

          <section className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-4 transition">
            <h2 className="text-2xl font-semibold mb-2 text-blue-400">
              3. Enlaces a Terceros
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Nuestro sitio web puede contener enlaces a sitios web de terceros. No somos responsables del contenido o las prácticas de privacidad de esos sitios.
            </p>
          </section>

          <section className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-4 transition">
            <h2 className="text-2xl font-semibold mb-2 text-blue-400">
              4. Limitación de Responsabilidad
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Alejandría no será responsable de ningún daño directo, indirecto o consecuente que resulte del uso o la imposibilidad de usar nuestro sitio web.
            </p>
          </section>

          <section className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-4 transition">
            <h2 className="text-2xl font-semibold mb-2 text-blue-400">
              5. Cambios en los Términos
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Nos reservamos el derecho de actualizar estos términos en cualquier momento. Te recomendamos revisar esta sección periódicamente.
            </p>
          </section>

          <section className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-4 transition">
            <h2 className="text-2xl font-semibold mb-2 text-blue-400">
              6. Contacto
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Si tienes alguna duda, podés escribirnos a:
            </p>

            <a
              href="mailto:contacto@alejandria.com"
              className="inline-block mt-3 text-blue-400 hover:text-blue-300 hover:underline transition"
            >
              contacto@alejandria.com
            </a>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TerminosyCon;