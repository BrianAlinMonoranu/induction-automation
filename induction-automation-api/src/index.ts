import express from 'express';
import employeesRoutes from './employees/employees.routes';

const app = express();
app.use(express.json());

app.use('/employees', employeesRoutes);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
