export default function ContadorHijo({ value, onClick }) {
  return (
    <>
      <button onClick={onClick}>Incrementar</button>
      <br />
      <br />
      <p>{value}</p>
    </>
  )
}
