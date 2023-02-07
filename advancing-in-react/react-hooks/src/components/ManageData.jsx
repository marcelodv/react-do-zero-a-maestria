import { useState } from "react";

export default function ManageData () {
    const [number, setNumber] = useState(15);
    
    let someData = 10;

    console.log(someData)

    return <div>
        <h2>Valor: { someData }</h2>
        <button onClick={() => {
            someData = 15
        }}>Mudar variável</button>
        <div>
            <h2>Valor: {number}</h2>
            <button onClick={() => setNumber(25)}>Mudar o State</button>
        </div>
    </div>
}