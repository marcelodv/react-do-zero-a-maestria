import { useState } from "react"
import "./MyForm.css"

export default function MyForm ({ user }) {
    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("Submitting the form...")
        console.log(name, email)
        
        setName("")
        setEmail("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        onChange={(e) => setName(e.target.value)} 
                        value={name} 
                    />
                </div>
                <label>
                    <span>E-mail: </span>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email} 
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}