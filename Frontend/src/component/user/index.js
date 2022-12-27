import React, {useEffect, useState} from 'react'
import AskAdmin from './ask-admin';
import LandingPage from './landing-page'
import { useSearchParams } from 'react-router-dom'

export default function UserPage() {
    const [quizId, setQuizId] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const quizId = searchParams.get('quizId')
        if(quizId){
            setQuizId(quizId)    
        }
        sessionStorage.setItem('quizId', quizId)
    }, [])
    return(
        <>
            {quizId ? 
                <LandingPage /> : 
                <AskAdmin />
            }
        </>
    )
}