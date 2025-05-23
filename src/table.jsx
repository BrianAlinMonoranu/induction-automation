import "./table.css";

function Table(){
    return (
        <div>
            <h2>Employees</h2>
            <div className="table-wrapper">
                <table className="fl-table">
              <thead>
                <tr>
                    <th>Surname</th>
                    <th>First Name</th>
                    <th>PPS</th>
                    <th>Safe Pass</th>
                    <th>Manual Handling</th>
                </tr>
              </thead>
              <tbody>
            {[...Array(10)].map((_, i) => (
              <tr key={i}>
                {[...Array(5)].map((_, j) => (
                  <td key={j}>Content {i + 1}</td>
                ))}
              </tr>
            ))}
          </tbody>
          </table>
            </div>
        </div>
    );
}

export default Table