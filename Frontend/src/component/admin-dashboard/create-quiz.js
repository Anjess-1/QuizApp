import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './admin.css'


export default function CreateQuiz(props) {
    const[title, setTitle] = useState("")
    const[subject, setSubject] = useState("")
    const[link, setLink] = useState("")


    const createQuizLink = () => {
        let headers = {
            "Content-Type": 'application/json;charset=utf-8',
            "Access-Control-Allow-Origin": "*",
            "jwt": sessionStorage.getItem('access-token')
        };
        let payload = {
            "title": title,
            "subject": subject,
        }
        axios.post(`http://localhost:3001/quiz`, payload, {headers})
        .then((response) => {
            console.log(response)
            let quizId = response.data.quizId;
            if(response.status==200) {
            let link = `http://localhost:3000/user?quizId=${quizId}`;
            console.log('beforeshowlink')
            props.showLink(link);
            props.closeQuiz();
            }
        })
    }
    return (
        <div>
            <Modal
                show={props.show}
                onHide={props.closeQuiz}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create a Quiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <input type="text"
                            placeholder='Enter title for quiz'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <br /><br />
                        <input type="text"
                            placeholder='Enter subject for quiz'
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.closeQuiz}>
                        Close
                    </Button>
                    <Button onClick={() => createQuizLink()}>Create Quiz</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}