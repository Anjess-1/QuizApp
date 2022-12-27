import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export default function AddQes(props) {
    const [question, setQuestion] = useState("")
    const [type, setType] = useState("")
    const [level, setLevel] = useState("")
    const [option, setOption] = useState(["", "", "", ""])
    const [answer, setAnswer] = useState("")
    const [subject, setSubject] = useState("")

    const addQueInDb = () => {
        let headers = {
            "Content-Type": 'application/json;charset=utf-8',
            "Access-Control-Allow-Origin": "*"
        };
        let payload = {
            "question": question,
            "type": type,
            "level": level,
            "option": option,
            "answer": answer,
            "subject": subject,
            "adminId": "adminId"
        }
        axios.post(`http://localhost:3001/question`, payload, { headers })
            .then((response) => {
                console.log(response)
            })
    }
    console.log(option)
    const addAnswerValue = (e, index) => {
        setOption((prevState) => {
            prevState[index] = e.target.value;
            return [...prevState];
            // return prevState.map((val, i)=>{
            //     if(i == index) {
            //         val = e.target.value;
            //     }
            //     return val;
            // })
        })      
    }
     
    return (
        <div>
            <Modal
                show={props.addQues}
                onHide  ={props.closeQues}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Question</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <input type="text"
                            placeholder='Enter question'
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}

                        />
                        <br /><br />
                        <input type="text"
                            placeholder='Enter Ques Subject'
                            onChange={(e) => setSubject(e.target.value)}

                        />
                        <br /><br />
                        <input type="text"
                            placeholder='Enter Ques Type'
                            onChange={(e) => setType(e.target.value)}

                        />
                        <br /><br />
                        <input type="text"
                            placeholder='Enter difficulty level'
                            onChange={(e) => setLevel(e.target.value)}

                        />
                        <br /><br />
                        <input type="text"
                            placeholder='Answer option 1'
                            value={option[0]}
                            onChange={(e) => addAnswerValue(e, 0)}
                        />
                        <br /><br />
                        <input type="text"
                            placeholder='Answer option 2'
                            value={option[1]}
                            onChange={(e) => addAnswerValue(e, 1)}
                        />
                        <br /><br />
                        <input type="text"
                            placeholder='Answer option 3'
                            value={option[2]}
                            onChange={(e) => addAnswerValue(e, 2)}
                        />
                        <br /><br />
                        <input type="text"
                            placeholder='Answer option 4'
                            value={option[3]}
                            onChange={(e) => addAnswerValue(e, 3)}
                        />
                        <br /><br />
                        <input type="text"
                            placeholder='Correct Answer option'
                            onChange={(e) => setAnswer(e.target.value)}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => addQueInDb()}>
                        Submit
                    </Button>
                    <Button onClick={props.closeQues}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}