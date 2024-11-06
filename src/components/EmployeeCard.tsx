import React from 'react'
import { IEmployee } from '../interfaces/employee.interface'

interface IProps extends IEmployee {
    isAddNewEmployee?: boolean
}

const EmployeeCard: React.FC<IProps> = ({
    id,
    name,
    salary,
    isAddNewEmployee = false
}) => {
    return (
        <div className="card" >
            {
                !isAddNewEmployee ? (
                    <>
                        <div className="card-body">
                            <h5 className="card-title">Name: {name}</h5>
                            <p className="card-text">Salary: {salary}</p>
                            <a href="#" className="btn btn-primary">Edit</a>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="card-body">
                            <button className="btn btn-primary">Add Employee</button>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default EmployeeCard
