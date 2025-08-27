import { TrashIcon } from '@heroicons/react/24/solid'

export default function TodoItem({ tarea, toggleComplete, eliminarTarea }) {
  return (
    <div className={`flex items-center justify-between gap-3 mb-2 p-3 shadow-md rounded border-2
                     ${tarea.completada ? 'border-blue-500' : 'border-pink-500'}`}>
      
      {/* Texto de la tarea */}
      <span className={`${tarea.completada ? 'line-through text-pink-500' : ''}`}>
        {tarea.texto}
      </span>

      {/* Contenedor de acciones: checkbox + trash */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="cursor-pointer w-5 h-5 accent-pink-500"
          checked={tarea.completada}
          onChange={() => toggleComplete(tarea.id)}
        />
        <button onClick={() => eliminarTarea(tarea.id)}>
          <TrashIcon className="w-5 h-5 text-red-500" />
        </button>
      </div>
    </div>
  )
}
