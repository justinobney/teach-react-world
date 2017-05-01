import React from 'react';
import ReactDOM from 'react-dom';

const Alert = props => (
  <div className={`alert alert-${props.type}`} role="alert">
    {props.title && <strong>{props.title} - </strong>}
    {props.children}
  </div>
);

ReactDOM.render(
  <div className="container">
    <div className="starter-template">
      <h1>Lets Learn React</h1>
      <Alert title="Step 2" type="info">
        Presentational Component
      </Alert>
    </div>
  </div>,
  document.getElementById('root')
);
