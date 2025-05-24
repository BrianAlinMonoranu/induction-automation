import { Employees } from './employees.schema';
import {v4 as uuidv4} from 'uuid'

export class EmployeeService {

    getEmployees(): Employees[] {
      //TODO: Request to DB for all employees
    return [{firstName : 'arne', SurName: 'slot', id:'ddawdawdaw231'}];
  }

  createUser(firstName: string, SurName: string, ): Employees {
    const newEmployees: Employees = {
      id: uuidv4(),
      firstName,
      SurName
    };
    return newEmployees;
  }
}
