import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <div className="App">
      <h1>Forms</h1>
      <MyForm user={{ name: "José", email: "jose@gmail.com", bio: "Software Developer", role: "Admin" }} />
    </div>
  )
}

export default App
