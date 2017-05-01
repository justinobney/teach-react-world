import React from 'react';
import ReactDOM from 'react-dom';

class Alert extends React.Component {
  render() {
    return (
      <div className={`alert alert-${this.props.type}`} role="alert">
        {this.props.title && <strong>{this.props.title} - </strong>}
        {this.props.children}
      </div>
    );
  }
}

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
