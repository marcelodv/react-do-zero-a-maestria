import ShowUserName from './components/ShowUserName'
import ShowUserData from './components/ShowUserData'
import ButtonAlert from './components/ButtonAlert'
import './App.css'

function App() {
  const username = "Matheus"

  const displayAlert = () => {
    alert("Hello World!");
  }

  return (
    <div className="App">
      <ShowUserName name={username} />

      <ShowUserData name="João" age={20} city="Hortolândia" activeUser={true} state="Sao Paulo"/>

      <ButtonAlert action={displayAlert}/>
    </div>
  )
}

export default App
