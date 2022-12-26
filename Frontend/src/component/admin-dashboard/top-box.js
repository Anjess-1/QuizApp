import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { Link } from 'react-router-dom'
import CreateLink from './ create-link';
import AddQes from './add-ques';
import CreateQuiz from './create-quiz';

export default function TopBox() {
    const [isQuizShow, setIsQuizShow] = useState(false);
    const [isAddQues, setIsAddQues] = useState(false)
    const [quizLink, setQuizLink] = useState("")

    const showQuiz = () => setIsQuizShow(true);
    const closeQuiz = () => setIsQuizShow(false);

    const addQues = () => setIsAddQues(true)
    const closeQues = () => setIsAddQues(false)

    console.log(quizLink)
    const showLink = (link) => {
        if(link)
        console.log(quizLink)
        setQuizLink(link)
    }
    const closeLink = () => setQuizLink("")

    return (
        <div>
            <CreateQuiz
                show={isQuizShow}
                closeQuiz={closeQuiz}
                showLink = {showLink}
            />
            <AddQes
                addQues={isAddQues}
                closeQues={closeQues}
            />
            <CreateLink
            link = {quizLink}
            closeLink={closeLink}
            />

            <div>
                <h1>Hello Admin</h1>
                <button variant="primary" onClick={showQuiz}>Create Quiz</button>
                <button variant="primary" onClick={addQues}>Add Question</button>
            </div>
        </div>
    )
}