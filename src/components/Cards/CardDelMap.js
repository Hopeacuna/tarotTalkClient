import React from 'react'
import {Table, Button} from 'reactstrap';

const CardTable = (props) => {


    const deleteCard = (card) => {
        fetch(`http://localhost:3000/log/${card.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token,
            })
        }) 
        .then(() => props.fetchCard)
    }

    const cardMapper = () => {
        return props.card.map((card, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{card.id}</th>
                    <td>{card.name}</td>
                    <td>{card.keywords}</td>
                    <td>
                        <Button color='warning'>Update</Button>
                        <td><Button onClick={ deleteCard()}>Delete</Button></td>
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
        <h3>Cards</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Card</th>
                    <th>Keywords</th>
                </tr>
            </thead>
            <tbody>
                {cardMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default CardTable;