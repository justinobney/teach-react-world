import React from 'react';
import ReactDOM from 'react-dom';
import Alert from './Alert';

class Home extends React.Component {
  state = {
    type: 'info',
  };

  // 👀 binding this
  _toggleAlertType = () => {
    // 👀 setState callback
    this.setState(prevState => ({
      type: prevState.type === 'info' ? 'danger' : 'info',
    }));
  };

  render() {
    return (
      <div className="container">
        <div className="starter-template">
          <h1>Lets Learn React</h1>
          {/* 👀 callback function */}
          <button className="btn btn-default" onClick={this._toggleAlertType}>
            Toggle Alert Type
          </button>
          <hr />
          {/* 👀 use of state passed as props */}
          <Alert title="Step 2" type={this.state.type}>
            Presentational Component
          </Alert>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById('root'));
