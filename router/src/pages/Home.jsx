import { Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

export default function Home () {
    const url = "http://localhost:3333/products";

    const {data: items, loading, error} = useFetch(url)

    return (
        <div>
            <h2>Products</h2>
            {error && <p>{error}</p>}
            <ul>
                {items && items.map(item => (
                    <li key={item.id}>{item.name} - ${item.price}</li>
                ))}
            </ul>
        </div>
    )
}