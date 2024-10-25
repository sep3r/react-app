import React from 'react'

function ListEmployeeComponents() {
    const dataDummy = [
        {
            "id":"1",
            "name":"Sepehr",
            "family":"Mirzanezhad",
            "email":"sep3r@yahoo.com"

    },
    {
        "id":"2",
        "name":"sahar",
        "family":"Mirzanezhad",
        "email":"sep3r@yahoo.com"

},
{
    "id":"3",
    "name":"mona",
    "family":"zarei",
    "email":"sep3r@yahoo.com"

}
]
  return (
    <div>
    <h2>ListEmployeeComponents</h2>
    <table>
        <thead>
            <tr>
                <th>Employee Id</th>
                <th>Employee Fist Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email Address</th>
            </tr>
        </thead>
        <tbody>
            {
                dataDummy.map(employee=>
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.family}</td>
                        <td>{employee.email}</td>
                    </tr>
                )
            }
        </tbody>
    </table>
    </div>
  )
}

export default ListEmployeeComponents