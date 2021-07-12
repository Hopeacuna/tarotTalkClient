import React, {useState, UseEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';


const RefCreate = (props) => {
    const [drawnCard, setDrawnCard] = useState('');
    const [title, setTitle] = useState('');
    const [reflection, setReflection] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/reflection/create', {
            method: 'POST',
            body: JSON.stringify({ref: {drawnCard: drawnCard, title: title, reflection: reflection, date: date}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((refData) => {
            console.log(refData);
            setDrawnCard('');
            setTitle('');
            setReflection('');
            setDate('');
            props.fetchReflection();
        })
    }

    return(
        <>
        <h3>Reflection</h3>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="drawnCard" />
                <Input name="drawnCard" value={drawnCard} onChange={(e) => setDrawnCard(e.target.value)} />
            </FormGroup>

            <FormGroup>
                <Label htmlFor="title" />
                <Input name="title" value={title} onChange={(e) => setTitle(e.target.value)} >
                </Input>
            </FormGroup>

            <FormGroup>
                <Label htmlFor="reflection" />
                <Input name="reflection" value={reflection} onChange={(e) => setReflection(e.target.value)} />
            </FormGroup>

            <FormGroup>
                <Label htmlFor="date" />
                <Input name="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </FormGroup>

            <Button type="submit">Click To Submit</Button>
            
        </Form>
        </>
    )
}

export default RefCreate;