import { FaWhatsapp } from "react-icons/fa";

const WppFlotante = () => {
  return (
    <div className="relative z-50">
        <a href="https://wa.me/543584316114" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition">
            <FaWhatsapp size={26} />   
        </a>
    </div>
  )
}

export default WppFlotante