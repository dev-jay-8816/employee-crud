import { combineReducers } from '@reduxjs/toolkit'

import employeeReducer from './slices/employeeSlice'


const rootReducer = combineReducers({
    employee: employeeReducer
})


export default rootReducer;