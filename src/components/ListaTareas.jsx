export default function ListaTareas() {
  const lista = [
    'Comprar pan',
    'Pagar el recibo de luz',
    'Buscar la muralla china',
  ]

  return (
    <div>
      <h1>Lista de tareas</h1>
      <ol>
        {lista.map((e) => (
          <li>{e}</li>
        ))}
      </ol>
    </div>
  )
}
