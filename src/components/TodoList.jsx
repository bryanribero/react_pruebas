import { useEffect, useState } from 'react'

export default function TodoList() {
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
  return (
    <div>
      <h1>Lista de tareas</h1>
      <input
        type="text"
        placeholder="Ingrese una tarea"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <br />
      <button onClick={addList}>Enviar</button>
      <br />
      <br />
      <ul>
        {list.map((e) => (
          <li key={e.id}>{e.content}</li>
        ))}
      </ul>
    </div>
  )
}
