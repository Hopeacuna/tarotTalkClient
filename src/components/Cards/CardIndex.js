import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import ShowCards from './Tarotdraw';
import CardEdit from './EditCard';


const CardIndex = (props) => {

    const [cards, setCards] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [cardToUpdate, setCardToUpdate] = useState({});

    const fetchCard = () => {
        fetch('http://localhost:3000/card', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then( (res) => res.json())
        .then((cardData) => {
            setCards(cardData)
        })
    }

    useEffect(() => {
        fetchCard();
    }, [])

    return(
        <Container>
            <Row>
                <Col md="3">
                    <ShowCards token={props.token} 
                    fetchCard={fetchCard} token={props.token}/>
                    
                </Col>
                {updateActive ? <CardEdit cardToUpdate ={cardToUpdate}
                // updateOff={updateOff} 
                token={props.token} fetchCard={fetchCard}/> : <></>}
            </Row>
        </Container>
 
    )
}

export default CardIndex;