
import React from "react"
import {useEffect, useState} from "react"
import { listStudents } from "../services/EmployeeService"

const ListEmployeeComponents = () => {
    
    const [students, setStudents] = useState([])

    useEffect(() => {
        listStudents().then((response) =>{
            setStudents(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])
  return (
    <div className='container'>
    <h2 className="text-center">ListEmployeeComponents</h2>
    <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Student Id</th>
                <th>Student Fist Name</th>
                <th>Student Last Name</th>
            </tr>
        </thead>
        <tbody>
            {
                students.map(student =>
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.surname}</td>
                    </tr>
                )
            }
        </tbody>
    </table>
    </div>
  )
}

export default ListEmployeeComponents