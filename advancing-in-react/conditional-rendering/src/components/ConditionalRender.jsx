import { useState } from "react"

export default function ConditionalRender () {
    const [x]  = useState(false)

    const [name, setName] = useState("Marcos")

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <h2>Se "x" for 'true', sim!</h2>}
            {!x && <h2>Se "x" for 'false', sim!</h2>}
            <hr />
            <h1>If ternário: </h1>
            {name === "João" ? (
                <div><h2>O nome é João</h2></div>
            ) : (
                <div><h2>Nome não é João</h2></div>
            )}
            <button onClick={() => (
                setName("João")
            )}> Mudar o nome para João </button>
        </div>
    )
}