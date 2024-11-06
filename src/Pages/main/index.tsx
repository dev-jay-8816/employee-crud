import { lazy, ReactElement, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import Loader from '../../components/Loader';


interface IRoute {
    id: string;
    path: string;
    element: ReactElement
}

// Pages
const EmployeeList = lazy(() => import('./EmployeeList'))

const routes: IRoute[] = [
    {
        id: 'employee-listing',
        path: '/',
        element: <EmployeeList />
    }
]


const Main = () => {
    return (
        <div className='container'>
            <Suspense fallback={<Loader />}>
                <Routes>
                    {
                        routes?.map((route) => <Route key={route.id} path={route.path} element={route.element} />)
                    }
                </Routes>
            </Suspense>
        </div>
    )
}

export default Main
