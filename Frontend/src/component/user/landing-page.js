import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios';

export default function LandingPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [email, setEmail] = useState("")

    useEffect(() => {
        const quizId = searchParams.get('quizId')    
        sessionStorage.setItem('quizId', quizId)
    }, [])

    const createUser = () => {
        let headers = {
            "Content-Type": 'application/json;charset=utf-8',
            "Access-Control-Allow-Origin": "*"
        };
        let payload = {
            "name": "name",
            "email": email
        }
        axios.post(`http://localhost:3001/user`, payload, {headers})
        .then((response) => {
            console.log(response)
        })
    }
    
    return(
        <div className='box'>
            <input type="text"
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <br /><br />
            <button className ='button' onClick={() => createUser()}>Submit</button>
        </div>
    )
}