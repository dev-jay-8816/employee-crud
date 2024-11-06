import { useSelector } from "react-redux"
import { getEmployees } from "../../redux/slices/employeeSlice"
import EmployeeCard from "../../components/EmployeeCard";

const EmployeeList = () => {

    // Redux
    const employeeList = useSelector(getEmployees);


    return (
        <div className="container row mt-4">
            {
                employeeList?.length > 0 && employeeList?.map((emp) => {
                    return (
                        <div key={emp.id} className="col-4 mt-2">
                            <EmployeeCard {...emp} />
                        </div>
                    )
                })
            }
            <div className="col-4 mt-2">
                <EmployeeCard id="" name="" salary="" isAddNewEmployee />
            </div>
        </div>
    )
}

export default EmployeeList
