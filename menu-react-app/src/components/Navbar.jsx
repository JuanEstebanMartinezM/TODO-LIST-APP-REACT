import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 text-white shadow">
      {}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-14 flex items-center justify-between">
            {}
            <div className="text-lg font-semibold tracking-tight">Mi App</div>

            {}
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#" className="hover:opacity-90">Inicio</a>
              <a href="#" className="hover:opacity-90">Servicios</a>
              <a href="#" className="hover:opacity-90">Contacto</a>
            </nav>

            {}
            <button
              className="md:hidden p-2"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen(!open)}
            >
              {open ? (
                
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ) : (
                
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {}
      <div className={`${open ? "block" : "hidden"} md:hidden bg-white text-gray-800 shadow`}>
        <nav className="max-w-6xl mx-auto px-4 py-3 text-sm">
          <a href="#" className="block py-2 hover:text-black" onClick={() => setOpen(false)}>Inicio</a>
          <a href="#" className="block py-2 hover:text-black" onClick={() => setOpen(false)}>Servicios</a>
          <a href="#" className="block py-2 hover:text-black" onClick={() => setOpen(false)}>Contacto</a>
        </nav>
      </div>
    </header>
  );
}
