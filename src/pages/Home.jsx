import { libros } from "../data/books"
import LibroCard from "../components/LibroCard"
import FadeInOnScroll from "../components/FadeInOnScroll"

const Home = () => {
  return (
    <div className="min-h-screen max-w-6xl mx-auto bg-gray-700 p-4 sm:p-8">
      <div className="flex justify-center mb-4">
        <img src="/img/logo-alejandria.png" alt="Logo Alejandría" className="w-[18rem] h-auto" />
      </div>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-400">
          Nuestra colección
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {libros.map((libro) => (
          <FadeInOnScroll key={libro.id}>
            <LibroCard libro={libro} />
          </FadeInOnScroll>
        ))}
      </div>
    </div>
  )
}

export default Home