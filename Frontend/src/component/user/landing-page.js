import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios';

export default function LandingPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const createUser = () => {
        let headers = {
            "Content-Type": 'application/json;charset=utf-8',
            "Access-Control-Allow-Origin": "*"
        };
        let payload = {
            "name": "name",
            "email": email
        }
        axios.post(`http://localhost:3001/user/login`, payload, {headers})
        .then((response) => {
            if(response.status==200){
                sessionStorage.setItem('access-token', response.data.token);
                navigate('/gamePage')
            }
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