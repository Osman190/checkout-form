import React from 'react';

export default class Fetch extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        data: {
          author: '',
          filename: ''
      }
    } 
  }
  callPicture() { 
    // e.preventDefault()
    const random = Math.floor(Math.random() * (800- 200)) + 200
   const fetchAsync = async() => {
      try{
        const result = await fetch('https://picsum.photos/list')
        const data = await result.json()
        console.log(data[random])
        this.setState({
          author: data[random].author,
          filename: data[random].filename
        })
      }
      catch(error) {
        console.log(error)
    }
  } 
  fetchAsync()
}

  render() {
    return (
      <div>
        <h1>
          <button className="badge badge-secondary badge-pill" onClick={this.callPicture.bind(this)}>Load A Picture</button>
          <div className="picture-container">
            <img className="randompicture" src={`https://picsum.photos/${this.state.filename}`} alt={this.state.filename} />
          </div>
        </h1>
      </div>
      );
    }
}
