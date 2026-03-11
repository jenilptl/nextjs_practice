'use client';
import { useState } from "react";
import { useEffect } from "react";

interface Student {
    student_id: number;
    student_name: string;
    email: string;
    enrollment_no: string;
}

const getData = async () => {
    const res = await fetch("/api/student");
    const data = await res.json();
    return data;
}

export default function GetAll() {
    const [students, setStudents] = useState<Student[]>([]);
    useEffect(() => {
        getData().then((data) => setStudents(data));
    }, []);

    return (
        <div>
            <h1>All Students</h1>
            <ul>
                {students.map((student) => (
                    <li key={student.student_id}>{student.student_name} - {student.email} - {student.enrollment_no}</li>
                ))}
            </ul>
        </div>
    );
}

