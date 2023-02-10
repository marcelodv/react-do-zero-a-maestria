
import { useState } from 'react'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import './App.css'

function App() {
  const [message, setMessage] = useState("")

  const handleMessage= (msg) => {
    setMessage(msg)
  }

  return (
    <div className="App">
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  )
}

export default App
