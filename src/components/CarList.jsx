import { useDispatch, useSelector } from 'react-redux'
import { clearCar } from '../features/cars/carsSlice'

function CarList() {
  // Yapılacaklar: store'dan arabaları alın
  const { cars } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const onClick = (car) => {
    // Yapılacak: Arabayı silin
    return dispatch(clearCar(car.id))
  }

  const renderedCars = cars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.price}
        </p>
        <button className="button" onClick={() => onClick(car)}>
          Sil
        </button>
      </div>
    )
  })

  return (
    <div className="car-list">
      {renderedCars.length ? (
        renderedCars
      ) : (
        <div className="no-cars">Başlamak için araba ekleyin</div>
      )}
    </div>
  )
}

export default CarList
