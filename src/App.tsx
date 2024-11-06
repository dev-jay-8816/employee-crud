import { useEffect } from "react"
import Page from "./Pages/Page"
import { useDispatch } from "react-redux"
import { setEmployees } from "./redux/slices/employeeSlice"

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    fetchEmployee()
  }, [])

  async function fetchEmployee() {
    try {
      const response = await fetch('/api/employee').then(data => data.json())
      if (response) {
        // console.log("response?.employees: ", response?.employees)
        dispatch(setEmployees(response?.employees))
      }
    } catch (error) {
      console.log("error: ", error)
    }
  }


  return (
    <>
      <Page />
    </>
  )
}

export default App
