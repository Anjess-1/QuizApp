import React, { useEffect, useState } from 'react'
import QuizTable from './quiz-table'
import TopBox from './top-box'
import { useNavigate } from 'react-router-dom'


export default function AdminDashboard() {
    const[token, setToken] = useState("")
    const navigate = useNavigate();


    useEffect(() => {
        // setToken(sessionStorage.getItem('access-token'))
        if(!sessionStorage.getItem('access-token')) {
            navigate('/')
        }
    }, [])

    return (
        <div>
            <TopBox />
            <QuizTable />
        </div>
    )
}
