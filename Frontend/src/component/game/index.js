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
        if (difficultyLevel > 0 && difficultyLevel <= 10) {
            if (quesNum <= 10)
                return true;
        } else {
            if (!isScoreSave) {
                let header = {
                    "Content-Type": 'application/json;charset=utf-8',
                    "Access-Control-Allow-Origin": "*",
                    "jwt": sessionStorage.getItem('access-token')
                }
                let payload = {
                    "score": score,
                    "quizId": sessionStorage.getItem(),
                    "quesAttempted": quesNum
                }
                axios.post(`http://localhost:3001/user/postScore`, payload, { header })
                    .then((response) => {
                        console.log(payload.score)
                        console.log(response)
                    })
                setIsScoreSave(true)
            }
            return false;
        }

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
                        level={5}
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