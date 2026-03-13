import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="container mx-auto text-center">
            <p className="text-sm">&copy; 2026 Alejandría. Todos los derechos reservados.</p>
            <p className="text-sm mt-2">
                <Link to="/contacto" className="hover:text-blue-400">Contáctanos</Link> | 
                <Link to="/terms" className="hover:text-blue-400"> Términos de Servicio</Link> | 
                <Link to="/privacy" className="hover:text-blue-400"> Política de Privacidad</Link>
            </p>
        </div>
    </footer>
    </div>
  )
}

export default Footer