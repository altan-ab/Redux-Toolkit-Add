import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    price: 0,
    names: '',
    cars: [],
    warning: '',
  },
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      if (state.count > 0) state.count -= 1
    },
    rename: (state, actions) => {
      state.names = actions.payload
    },
    prices: (state, actions) => {
      state.price = actions.payload
    },
    catalog: (state) => {
      if (!state.cars.find((car) => car.name === state.names)) {
        console.log('car name')
        state.warning = ''
        const newCar = {
          name: state.names,
          price: state.price,
          id: crypto.randomUUID(),
        }
        state.cars = [...state.cars, newCar]
        console.log(state.cars)
      } else {
        state.warning = "You can't buy two of the same car"
      }
    },
    clearCar: (state, actions) => {
      state.cars = state.cars.filter((car) => car.id !== actions.payload)
    },
  },
})

export const { increment, decrement, rename, prices, catalog, clearCar } =
  counterSlice.actions

export default counterSlice.reducer
