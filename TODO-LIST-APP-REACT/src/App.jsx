import TodoItem from './TodoItem'
import { useState } from 'react'

export default function App() {
  const [tareas, setTareas] = useState([])
  const [input, setInput] = useState('')
 
  const agregarTareas = () => {
    if (input.trim()) {
      setTareas([
        ...tareas,
        { id: Date.now(), texto: input.trim(), completada: false },
      ])
      setInput('')
    }
  }

  const eliminarTarea= (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id))
  }

  console.log(tareas.map(tarea => tarea.texto))


  const toggleComplete = (id) => {
    setTareas(tareas.map(tarea =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    ))
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5 text-center">
        MI LISTA DE TAREAS REACT
      </h1>
      <div className="flex gap-3 mb-4 border-1border-pink-500">
        <input
          className="flex-1 p-3  shadow-md rounded "
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-pink-500 text-white px-4 py-2 rounded"
          onClick={agregarTareas}
        >
          Agregar Tarea
        </button>
      </div>
      <div>
        {tareas.map(tarea => (
          <TodoItem key={tarea.id} tarea={tarea} eliminarTarea={eliminarTarea} toggleComplete={toggleComplete} />
        ))}
      </div>
    </div>
  )
}
 
