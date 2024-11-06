import { createServer, Model } from "miragejs"
import { ModelDefinition } from 'miragejs/-types';
import { IEmployee } from "./interfaces/employee.interface"

const employeeModelStr = 'employee'

const EmployeeModel: ModelDefinition<IEmployee> = Model.extend({});

export default function makeServer() {
    createServer({
        models: {
            employee: EmployeeModel,
        },
        seeds(server) {
            server.create(employeeModelStr, { id: '1', name: 'emp 1', salary: '45' })
            server.create(employeeModelStr, { id: '2', name: 'emp 2', salary: '54583' })
            server.create(employeeModelStr, { id: '3', name: 'emp 3', salary: '343' })
            server.create(employeeModelStr, { id: '4', name: 'emp 4', salary: '343' })
            server.create(employeeModelStr, { id: '5', name: 'emp 5', salary: '4554' })
        },
        routes() {
            this.get("/api/employee", (schema) => {
                return schema.all('employee')
            })

        },
    })
}