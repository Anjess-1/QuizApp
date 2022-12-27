import React, { useEffect } from 'react'
import QuesBox from './ques-box'
import ScoreBox from './score-box'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Game() {
    const [score, setScore] = useState(0)
    const [difficultyLevel, setDifficultyLevel] = useState(5)
    const [quesNum, setQuesNum] = useState(1)
    const navigate = useNavigate();

    useEffect(() => {
        if(!sessionStorage.getItem('access-token')){
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
        } else
            return false;
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
                        Game Over!
                    </div>
                }
            </div>
        </div>
    )
}