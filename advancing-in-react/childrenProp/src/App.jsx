import Container from './components/Container'
import './App.css'

function App() {

  return (
    <div className="App">
      <h1>Children Prop</h1>
      <hr />
      <Container>
        <h3>Conteúdo do container passado por "Children Prop"</h3>
      </Container>
    </div>
  )
}

export default App
