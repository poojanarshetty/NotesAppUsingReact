import React, { useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import {Form,FormControl} from 'react-bootstrap';
import { EditNote, NewNote } from '../services/notes';
import { useDispatch } from 'react-redux';

export const NewNoteModel = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div>
    <Button onClick={handleShow} className='btn btn-success'>New Note</Button>
    <NoteModel note={null} handleFormSubmit={NewNote} show={show} handleClose={handleClose} />
</div>

}

export const EditNoteModel = ({ note }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div>
        <Button onClick={handleShow} className='btn btn-warning'>Edit</Button>
        <NoteModel note={note} handleFormSubmit={EditNote} show={show} handleClose={handleClose} />
    </div>
}


const NoteModel = ({ note, handleFormSubmit, show, handleClose }) => {
    const [modelNote, setModelNote] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        setModelNote(note);
    }, [note]);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Form onSubmit={event => {
                event.preventDefault();
                handleFormSubmit(dispatch, modelNote);
            }}>
                <Modal.Body>
                    <InputGroup>
                        <FormControl value={modelNote === null ? '' : modelNote.value}
                            onChange={event => setModelNote({ ...modelNote, value: event.target.value })} />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button type='submit' variant="primary" onClick={handleClose}>
                        Save
            </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}
