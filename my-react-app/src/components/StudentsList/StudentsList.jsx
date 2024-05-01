import { useState } from "react"
import StudentRow from "../StudentRow/StudentRow"
import studentsData from "../StudentsList/Students.json"

const StudentsList = () => {

    const [students, setStudents] = useState(studentsData)

    return (
        <div className="StudentsList">
            <h1>Soy la lista de estudiantes</h1>
            <hr />
            {
                students.map(eachStudent => {
                    return <P />
                })
            }
        </div>
    )
}

export default StudentsList