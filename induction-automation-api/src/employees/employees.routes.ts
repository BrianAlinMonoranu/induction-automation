import { Router } from 'express';
import { EmployeesController } from './employees.controller';

const router = Router();
const controller = new EmployeesController();

router.get('/', controller.getAllUsers);
router.post('/', controller.createUser);

export default router;
