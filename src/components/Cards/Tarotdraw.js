import React, { Component, useState } from 'react';
// import CardDelMap from './CardDelMap';
import EditCard from './EditCard';



const ShowCards = (props) => {

const [cards, setCards] = useState([]);


const tarotFetch = () => {
      fetch(`http://localhost:3000/card/`, {
      method: "GET",
      headers: new Headers ({
        'Content-Type': 'application/json',
        'Authorization': props.sessionToken
    })
  })
  .then( (res) => res.json())
  .then(json => setCards(json))
  .then(console.log("cards", cards))
}

// create tarotFetch()


  // render() {
    return (
      <div >
        <button  onClick={() => tarotFetch()}>Draw</button>
        {/* <CardDelMap /> */}
        <EditCard />
        <div >
        </div>
      </div>
    )
  }


export default ShowCards;