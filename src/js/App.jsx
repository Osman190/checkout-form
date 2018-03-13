import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Form from './Form.jsx';

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
      headerdata: {
        "img": "https://cdn2.iconfinder.com/data/icons/african-animals/128/rhino-512.png",
        "title": "Hello From Blabla",
        "desc": "Below is an example form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
      }
    }
  }
  render() {
    return (
      <React.Fragment>
        <Header data={this.state.headerdata} />
        <div className="row">
          <div className="col-md-8 order-md-1">
            <Form />
          </div>
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill">3</span>
            </h4>
            {this.state.data.map((item, i) => <Product key={i} data={item} />)}
            <br />
            <form className="card p-2">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Promo code" />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-secondary">Redeem</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;