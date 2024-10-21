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
      // state.price = actions.payload
      if (actions.payload > 0) {
        state.price = actions.payload
        state.warning = ''
      } else {
        state.price = 0
        state.warning = 'Please enter a positive price amount'
      }
    },
    catalog: (state) => {
      if (!state.cars.find((car) => car.name === state.names)) {
        if (state.names.trim() && state.price > 0) {
          state.warning = ''
          const newCar = {
            name: state.names,
            price: state.price,
            id: crypto.randomUUID(),
          }
          state.cars = [...state.cars, newCar]
          state.names = ''
          state.price = 0
        } else {
          state.warning = 'Please enter a valid name and price'
        }
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
