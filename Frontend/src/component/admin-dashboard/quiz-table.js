import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function QuizTable() {
    const [quizData, setQuizData] = useState([]);
    useEffect(() => {
        let headers = {
            "Content-Type": 'application/json;charset=utf-8',
            "Access-Control-Allow-Origin": "*",
            "jwt": sessionStorage.getItem('access-token')
        };
        console.log(headers)
        axios.get(`http://localhost:3001/quiz/getQuizByAdminId`, { headers })
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
