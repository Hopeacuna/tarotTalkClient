import React from 'react'
import {Table, Button} from 'reactstrap';

const ReflectionTable = (props) => {


    // const deleteReflection = (reflection) => {
    //     fetch(`http://localhost:3000/log/${reflection.id}`, {
    //         method: 'DELETE',
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             'Authorization': props.token
    //         })
    //     }) 
    //     .then(() => props.fetchReflection

    const reflectionMapper = () => {
        return props.reflection.map((reflection, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{reflection.id}</th>
                    <td>{reflection.drawnCard}</td>
                    <td>{reflection.title}</td>
                    <td>{reflection.reflection}</td>
                    <td>{reflection.date}</td>
                    <td>
                        <Button color='warning'>Update</Button>
                        {/* <Button color='danger' onClick={() => {deleteWorkout(workout)}}>Delete</Button> */}
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
        <h3>Your Journal</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Card</th>
                    <th>Title</th>
                    <th>Journal</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {reflectionMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default ReflectionTable;