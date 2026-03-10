import useState from 'react'

const Checkout = () => {
  return (
    <div className="p-8 text-white">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        <p className="text-lg mb-4">Revisa tu compra antes de proceder al pago.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ir a pagar
        </button>
    </div>
  )
}

export default Checkout