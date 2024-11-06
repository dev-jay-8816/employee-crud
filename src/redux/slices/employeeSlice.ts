import { createSlice, PayloadAction } from "@reduxjs/toolkit";


import { IEmployee } from "../../interfaces/employee.interface";
import { RootState } from "../store";



const initialState: IEmployee[] = []


const employeeSlice = createSlice({
    name: 'employee',
    initialState: initialState,
    reducers: {
        setEmployees: (state, action: PayloadAction<IEmployee[]>) => {
            state = action.payload
            return state;
        },
        addEmployee: (state, action: PayloadAction<IEmployee>) => {
            state.push(action.payload);
        },
    }
});

export const {
    addEmployee,
    setEmployees
} = employeeSlice.actions;

export const getEmployees = (state: RootState) => state.employee;
export default employeeSlice.reducer;