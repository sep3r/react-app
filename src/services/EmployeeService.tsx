import React from "react"
import axios from "axios";

const REST_API_EMPLOYEE_URL = 'http://localhost:8080/students';
export const listStudents = ()=> axios.get(REST_API_EMPLOYEE_URL);