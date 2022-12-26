import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



export default function CreateLink(props) {
    return (
        <div>
            <Modal
                show={!props.link==''}
                onHide={props.closeLink}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create Link</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <p>{props.link}</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.closeLink}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}