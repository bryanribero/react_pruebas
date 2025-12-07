import { useEffect, useState } from 'react'

export default function Tareas() {
  const [list, setList] = useState(() => {
    const stored = localStorage.getItem('list')

    return stored ? JSON.parse(stored) : []
  })

  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  const addList = () => {
    if (inputValue.trim() === '') return

    setList((prev) => [
      ...prev,
      {
        id: prev.length === 0 ? 1 : prev[prev.length - 1].id + 1,
        content: inputValue.trim(),
      },
    ])

    setInputValue('')
  }

  const deleteList = (id) => {
    setList((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div>
      <h1>Lista de tareas</h1>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addList}>Ingresar tarea</button>
      <br />
      <br />
      <ul>
        {list.map((e) => (
          <li onClick={() => deleteList(e.id)} key={e.id}>
            {e.content}
          </li>
        ))}
      </ul>
    </div>
  )
}
