import './App.css'

function App() {

  const handleMyEvent = (e) => {
    // parametro 'e' são os dados do evento
    console.log(e)
    console.log("Clicou!")
  }

  return (
    <div className="App">
      <button onClick={handleMyEvent}>Clique aqui!</button>
      <button onClick={() => {console.log("Evento inline!")}}>Clique aqui também!</button>
      <button onClick={() => {
        if (true) {
          console.log("Isso não deveria existir :p")
        }
      }}>Clique aqui, por favor!</button>
    </div>
  )
}

export default App
