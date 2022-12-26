import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submit = () => {
        let header = {
            'Content-Type': 'application/json;charset=utf-8',
            "Access-Control-Allow-Origin": "*"
        }
        let payload = {
            email: email,
            password: password
        }
        axios.post(`http://localhost:3001/admin/login`, payload, { header })
            .then((response) => {
                if (response &&
                    response.status == 200) {

                }
            })
            .catch((err) => {
            })
    }

    return (
        <>
            <div>
                <label>Enter Email</label>
                <br /> <br />
                <input type="text"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <br /> <br />
                <label>Enter Password</label>
                <br /> <br />
                <input type="text"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <br /> <br />
                <button onClick={() => submit()}>Submit</button>
                <Link to={LoginForm} />
            </div>
        </>
    )
}