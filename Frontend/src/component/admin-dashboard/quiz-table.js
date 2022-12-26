import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function QuizTable() {
    const [quizData, setQuizData] = useState([]);
    useEffect(() => {
        let adminId = 2
        let header = {
            'Content-Type': 'application/json;charset=utf-8',
            "Access-Control-Allow-Origin": "*"
        }
        axios.get(`http://localhost:3001/quiz/getQuizByAdminId/${adminId}`, { header })
            .then((response) => {
                console.log(response.data.data);
                setQuizData(response.data.data);
            })
    }, [])

    return (
        <table>
            <thead>
                <tr>
                    <th>Sr.No</th>
                    <th>Title</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {quizData.map((element, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{element.quizTitle}</td>
                            <td>{element.status}</td>
                        </tr>
                    )
                })}
            </tbody>

        </table>
    )
}
