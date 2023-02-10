export default function CarDetails ({brand, color, newCar, km}) {
    return (
        <div>
            <h1>Car Details: </h1>
            <h2>Brand: { brand }</h2>
            <h2>Color: { color }</h2>
            <h2>New Car: { newCar }</h2>
            <h2>KM: { km }</h2>
            <hr />
        </div>
    )
}