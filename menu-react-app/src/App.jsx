import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Empuja el contenido para que no quede debajo de la barra fija */}
      <main className="pt-24">
        <section className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-semibold font-serif">
            Bienvenido a Mi App
          </h1>
          <p className="mt-4 text-gray-600">
            Aquí inicia tu contenido principal.
          </p>
        </section>
      </main>
    </div>
  );
}
