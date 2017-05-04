import React from 'react';
import ReactDOM from 'react-dom';

function logProps(WrappedComponent) {
  return class extends React.Component {
    componentWillReceiveProps(nextProps) {
      console.log('Current props: ', this.props);
      console.log('Next props: ', nextProps);
    }
    render() {
      // Wraps the input component in a container, without mutating it. Good!
      return <WrappedComponent {...this.props} />;
    }
  };
}

const Count = ({ count }) => (
  <h3>
    <div className="label label-info">{count}</div>
  </h3>
);

const WrappedCount = logProps(Count);

class App extends React.Component {
  state = {
    count: 0,
  };
  incrementCount = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };
  render() {
    return (
      <div className="container">
        <button className="btn btn-default" onClick={this.incrementCount}>
          Click Me
        </button>
        <Count count={this.state.count} />
        <WrappedCount count={this.state.count} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
