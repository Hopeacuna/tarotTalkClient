import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/user/register", {
            method: 'POST',
            body: JSON.stringify({ email: email, password: password, firstName: first, lastName: last}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.token)
            props.updateUserId(data.user.id)
            console.log(data);
        })
    }

    return(
        <div>
            <h1>Signup</h1>
            <Form onSubmit={handleSubmit}>
            <FormGroup>
                    <Label>First Name</Label>
                    <Input onChange={(e) => setFirst(e.target.value)} name="first" value={first} />
                </FormGroup>

                <FormGroup>
                    <Label>Last Name</Label>
                    <Input onChange={(e) => setLast(e.target.value)} name="last" value={last} />
                </FormGroup>
                
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                </FormGroup>
                <Button type="submit">Signup</Button>
            </Form>
        </div>
    )

}

export default Signup;