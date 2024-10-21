import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  increment,
  decrement,
  rename,
  prices,
  catalog,
} from '../features/cars/carsSlice'

function CarForm() {
  const [name, setName] = useState('')
  const [value, setValue] = useState('')

  const dispatch = useDispatch()
  const { warning } = useSelector((state) => state.counter)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (name.trim() && value.trim()) {
      dispatch(rename(name))
      dispatch(prices(Number(value)))
      dispatch(catalog())
      setName('')
      setValue('')
    }
  }

  return (
    <div className="car-form panel">
      <h4 className="subtitle ">Araba Ekle</h4>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Marka</label>
          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="label">Fiyat</label>
          <input
            className="input"
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="field">
          <button className="button is-link">Gönder</button>
          <h3>{warning}</h3>
        </div>
      </form>
    </div>
  )
}

export default CarForm
