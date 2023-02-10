import CarDetails from './components/CarDetails'
import './App.css'

function App() {
  const cars = [
    { id: 1, brand: "Ferrari", color: "Red", newCar: true, km: 0},
    { id: 2, brand: "Volkswagem", color: "Blue", newCar: false, km: 250},
    { id: 3, brand: "Mercedes", color: "Black", newCar: false, km: 10.000},
  ]

  return (
    <div className="App">
      <h1>Component reuse with Loop</h1>
      <hr />
      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          newCar={car.newCar} 
          km={car.km} 
        />
      ))}
    </div>
  )
}

export default App
