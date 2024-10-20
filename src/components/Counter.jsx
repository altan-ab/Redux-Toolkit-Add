import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../features/cars/carsSlice'
import { BsChevronUp, BsChevronDown } from 'react-icons/bs'

function Counter() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.count)

  return (
    <div className="counter">
      <h3>Araba Sayısı: {count}</h3>
      <button className="button is-link" onClick={() => dispatch(increment())}>
        <BsChevronUp />
      </button>
      <button className="button is-link" onClick={() => dispatch(decrement())}>
        <BsChevronDown />
      </button>
    </div>
  )
}

export default Counter
