import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product.jsx';

class App extends React.Component {
constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem('react-cart')) || {
      data:
        [
          {
            "id": 0,
            "name": "Car",
            "release": "September 2010",
            "amount": 1,
            "price": "700"
          },
          {
            "id": 1,
            "name": "Book",
            "release": "March 2007",
            "amount": 0,
            "price": "30.99"
          },
          {
            "id": 1,
            "name": "Toy",
            "release": "March 2007",
            "amount": 0,
            "price": "20.99"
          },
          {
            "id": 1,
            "name": "Fuck",
            "release": "March 2007",
            "amount": 0,
            "price": "49.99"
          }
        ],
      }
    }
  render() {
    return(
      this.state.data.map((person,i) => <Product data = {person} />)
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;