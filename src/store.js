import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/cars/carsSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})
