import React from "react"
import {useEffect, useState} from "react"
import { listStudents } from '../Services/StudentService'
import { useNavigate } from "react-router-dom"

const ListStudentComponent = () => {
    
    const [students, setStudents] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        listStudents().then((response) =>{
            setStudents(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    function addNewStudent(){
        navigator('/add-student')
    }

  return (
    <div className='container'>
    <h2 className="text-center">ListStudentsComponents</h2>
    <button type="button" className="btn btn-primary mb-2" onClick={addNewStudent}>Add Student</button>
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

export default ListStudentComponent