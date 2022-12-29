import React, { useEffect } from 'react'
import QuesBox from './ques-box'
import ScoreBox from './score-box'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GameOver from './game-over'
import axios from 'axios'

export default function Game() {
    const [score, setScore] = useState(0)
    const [difficultyLevel, setDifficultyLevel] = useState(5)
    const [quesNum, setQuesNum] = useState(1)
    const [isScoreSave, setIsScoreSave] = useState(false)

    const navigate = useNavigate();


    useEffect(() => {
        if (!sessionStorage.getItem('access-token')) {
            navigate('/user')
        }
    }, [])

    const markCorrectAns = () => {
        setDifficultyLevel((prevState) => {
            console.log(prevState)
            return prevState + 1
        })
        setScore((prevState) => {
            return prevState + 1
        })
        setQuesNum((prevState) => prevState + 1)
    }

    const markIncorrectAns = () => {
        setScore((prevState) => {
            return prevState - 1
        })
        setDifficultyLevel((prevState) => {
            return prevState - 1
        })
        setQuesNum((prevState) => prevState + 1)
    }

    const checkGameCondition = () => {
        if (difficultyLevel <= 0 || difficultyLevel > 10 || quesNum > 10) {
            if (!isScoreSave) {
                let headers = {
                    "Content-Type": 'application/json;charset=utf-8',
                    "Access-Control-Allow-Origin": "*",
                    "jwt": sessionStorage.getItem('access-token')
                }
                let payload = {
                    "score": score,
                    "quizId": sessionStorage.getItem('quizId'),
                    "quesAttempted": quesNum
                }
                axios.post(`https://3.108.254.239:3000/user/postScore`, payload, { headers })
                    .then((response) => {
                    })
                setIsScoreSave(true)
            }
            return false;
        }
        return true;

    }

    return (
        <div>
            <div><ScoreBox
                score={score}
                level={difficultyLevel}
                QuesNum={quesNum}
            />
            </div>
            <div>
                {checkGameCondition() ?
                    <QuesBox
                        level={difficultyLevel}
                        markCorrectAns={markCorrectAns}
                        markIncorrectAns={markIncorrectAns}
                    /> : <div>
                        <GameOver />
                    </div>
                }
            </div>
        </div>
    )
}