import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

const CardEdit = (props) => {
    const [editName, setEditName] = useState(props.name);
    const [editKeywords, setEditKeywords] = useState(props.keywords);
    const cardUpdate = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/card/${props.id}`, {
            method: 'PUT',
            body: JSON.stringify({card: {name: editName, keywords: editKeywords }}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => {
            props.showCards();
            props.updateOff();
        })
    }

    return (
        <Modal isOpen={true}>
            <ModalHeader>Editor</ModalHeader>
            <ModalBody>
                <Form onSubmit={cardUpdate}>
                    

                    <FormGroup>
                        <Label htmlFor="name">Edit name:</Label>
                        <Input name='name' value={editName} onChange={(e) => setEditName(e.target.value)}/>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="keywords">Edit keywords:</Label>
                        <Input name='keywords' value={editKeywords} onChange={(e) => setEditKeywords(e.target.value)}/>
                    </FormGroup>

                
                    <Button type="submit">Update the Card!</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default CardEdit;