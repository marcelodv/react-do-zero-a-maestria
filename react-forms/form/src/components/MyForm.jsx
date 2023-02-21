import { useState } from "react"
import "./MyForm.css"

export default function MyForm () {
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} />
                </div>
                <label>
                    <span>E-mail: </span>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}