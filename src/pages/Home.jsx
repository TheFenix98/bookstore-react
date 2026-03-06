import { libros } from "../data/books"
import LibroCard from "../components/LibroCard"

const Home = () => {
  return (
    <div className="min-h-screen max-w-6xl mx-auto bg-gray-700 p-4 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8">
        Nuestra colección
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {libros.map((libro) => (
          <LibroCard key={libro.id} libro={libro} />
        ))}
      </div>
    </div>
  )
}

export default Home