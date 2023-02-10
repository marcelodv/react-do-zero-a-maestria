import { useState } from "react"

export default function ListRender () {
    const [array] = useState(["Matheus", "Marcos", "Lucas", "João"])

    const [characters, setCharacters] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 2, name: "Marcos", age: 28},
        {id: 3, name: "Lucas", age: 25},
        {id: 4, name: "João", age: 20},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 5)

        setCharacters((prevCharacters) => {
            return prevCharacters.filter(character => randomNumber !== character.id)
        })
    }

    return (
        <div>
            <h3>4 Evangélios</h3>
            <hr />
            <ul>
                {array.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <hr />
            <ul>
                {characters.map((character) => (
                    <li key={character.id}>{character.name} - {character.age}y</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random characters</button>
        </div>
    )
}