import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Product 1</h6>
            <small className="text-muted">Release: </small>
          </div>
          <div className="d-flex flex-column">
            <span className="text-muted d-flex justify-content-center align-items-baseline">
              <button className="btn btn-sm btn-light">-</button>
              <button className="btn btn-sm btn-light">+</button>
            </span>
            <span className="badge">here something</span>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Product 2</h6>
            <small className="text-muted">Release: </small>
          </div>
          <div className="d-flex flex-column">
            <span className="text-muted d-flex justify-content-center align-items-baseline">
              <button className="btn btn-sm btn-light">-</button>
              <button className="btn btn-sm btn-light">+</button>
            </span>
            <span className="badge">here something</span>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Product 3</h6>
            <small className="text-muted">Release: </small>
          </div>
          <div className="d-flex flex-column">
            <span className="text-muted d-flex justify-content-center align-items-baseline">
              <button className="btn btn-sm btn-light">-</button>
              <button className="btn btn-sm btn-light">+</button>
            </span>
            <span className="badge">here something</span>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Product 4</h6>
            <small className="text-muted">Release: </small>
          </div>
          <div className="d-flex flex-column">
            <span className="text-muted d-flex justify-content-center align-items-baseline">
              <button className="btn btn-sm btn-light">-</button>
              <button className="btn btn-sm btn-light">+</button>
            </span>
            <span className="badge">here something</span>
          </div>
        </li>
        </div>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));