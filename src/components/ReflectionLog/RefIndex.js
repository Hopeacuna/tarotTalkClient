import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Reflections from './Reflections';
import EditRef from './EditRef';
import CreateRef from './CreateRef';


const RefIndex = (props) => {

    const [reflection, setReflection] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [journalToUpdate, setjournalToUpdate] = useState({});

    const fetchReflection = () => {
        fetch('http://localhost:3000/reflection', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then( (res) => res.json())
        .then((refData) => {
            setReflection(refData)
        })
    }

    useEffect(() => {
        fetchReflection();
    }, [])

    return(
        <Container>
            <Row>
                <Col md="3">
                    <CreateRef fetchReflection={fetchReflection} token={props.token} />
                </Col>
                <Col md="9">
                    <Reflections reflection={reflection} 

                    // editUpdateReflection={editUpdateReflection}
                    // updateOn={updateOn} 
                    fetchReflection={fetchReflection} token={props.token}/>
                </Col>
                {updateActive ? <EditRef journalToUpdate={journalToUpdate}
                // updateOff={updateOff} 
                token={props.token} fetchReflection={fetchReflection}/> : <></>}
            </Row>
        </Container>
 
    )
}

export default RefIndex;