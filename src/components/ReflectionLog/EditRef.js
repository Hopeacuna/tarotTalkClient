import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const ReflectionEdit = (props) => {
    const [editCard, setEditCard] = useState(props.journalToUpdate.drawnCard);
    const [editTitle, setEditTitle] = useState(props.journalToUpdate.title);
    const [editRef, setEditRef] = useState(props.journalToUpdate.reflection);
    const [editDate, setEditDate] = useState(props.journalToUpdate.date);
    const reflectionUpdate = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/reflection/${props.journalToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({ref: {drawnCard: editCard, title: editTitle, reflection: editRef, date: editDate}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => {
            props.fetchReflection();
            props.updateOff();
        })
    }

    return (
        <Modal isOpen={true}>
            <ModalHeader>Editor</ModalHeader>
            <ModalBody>
                <Form onSubmit={reflectionUpdate}>
                    

                    <FormGroup>
                        <Label htmlFor="title">Edit Title:</Label>
                        <Input name='title' value={editTitle} onChange={(e) => setEditTitle(e.target.value)}/>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="reflection">Edit Journal:</Label>
                        <Input name='reflection' value={editRef} onChange={(e) => setEditRef(e.target.value)}/>
                    </FormGroup>

                
                    <Button type="submit">Update the Workout!</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default ReflectionEdit;
