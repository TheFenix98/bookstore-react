import { libros } from "../data/books"
import LibroCard from "../components/LibroCard"

const Home = () => {
  return (
    <div className="min-h-screen max-w-6xl mx-auto bg-gray-900 p-8">
      <h1 className="text-3xl font-bold mb-8 ">
        Nuestra colección
      </h1>

      <div className="grid grid-cols-3 gap-8">
        {libros.map((libro) => (
          <LibroCard key={libro.id} libro={libro} />
        ))}
      </div>
    </div>
  )
}

export default Home