import React, { Component } from 'react'

class TarotFetch extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      keywords: '',
    }
  }

  fetchTarot() {
    let min = Math.ceil(1);
    let max = Math.floor(78);
    let cardNum = Math.floor(Math.random() * (max - min) + min);
    fetch(`http://localhost:3000/cards/${cardNum}`, {
      method: 'GET'
    }).then(res => res.json())
      .then(res => {
        this.setState({
          name: res.name,
          keywords: res.keywords,
        })
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div className={'wrapper'}>
        <button className={'start'} onClick={() => this.fetchTarot()}>Draw</button>
        <div className={'cardInfo'}>
          <h1 className={'cardName'}>{this.res.name}</h1>
        </div>
      </div>
    )
  }
}

export default TarotFetch;