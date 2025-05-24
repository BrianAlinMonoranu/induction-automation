import { Request, Response } from 'express';
import { EmployeeService } from './employees.service';

export class EmployeesController {
  private userService = new EmployeeService();

  getAllUsers = (req: Request, res: Response) => {
    const users = this.userService.getEmployees();
    res.json(users);
  };

  createUser = (req: Request, res: Response) => {
    const { name, email } = req.body;
    const newUser = this.userService.createUser(name, email);
    res.status(201).json(newUser);
  };
}
