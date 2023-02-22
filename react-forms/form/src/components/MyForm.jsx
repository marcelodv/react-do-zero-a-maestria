import { useState } from "react"
import "./MyForm.css"

export default function MyForm ({ user }) {
    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")
    const [bio, setBio] = useState(user ? user.bio : "")
    const [role, setRole] = useState(user ? user.role : "")

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("Submitting the form...")
        console.log(name, email, bio, role)
        
        setName("")
        setEmail("")
        setBio("")
        setRole("")
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
                <label>
                    <span>Bio: </span>
                    <textarea 
                        name="bio"
                        placeholder="User description"
                        onChange={(e) => {setBio(e.target.value)}}
                        value={bio}
                    ></textarea>
                </label>
                <label>
                    <span>User role:</span>
                    <select 
                        name="role"
                        onChange={(e) => {setRole(e.target.value)}}
                        value={role}
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}