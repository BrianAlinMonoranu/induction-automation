import "./table.css";

function Table({ employees }) {
    return (
        <div>
            <h2>Employees</h2>
            <div className="table-wrapper">
                <table className="fl-table">
                    <thead>
                        <tr>
                            <th>Surname</th>
                            <th>First Name</th>
                            <th>Induction Status</th>
                            <th>Safe Pass</th>
                            <th>Manual Handling</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees && employees.map((employee, index) => (
                            <tr key={index}>
                                <td>{employee.surname}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.inductionStatus}</td>
                                <td>{employee.safePass}</td>
                                <td>{employee.manualHandling}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;