import React from 'react';
import ReactDOM from 'react-dom';

const Even = ({children}) => (
  <h3><span className="label label-success">{children} - Even</span></h3>
);

const Odd = ({children}) => (
  <h3><span className="label label-info">{children} - Odd</span></h3>
);

const Switch = ({count, children = Function()}) => (
  <div>
    {children(count % 2 === 0)}
  </div>
);

class App extends React.Component {
  state = {
    count: 0,
  };
  incrementCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}));
  };
  render() {
    return (
      <div>
        <button className="btn btn-default" onClick={this.incrementCount}>
          Click Me
        </button>
        <Switch count={this.state.count}>
          {isEven =>
            (isEven
              ? <Even>{this.state.count}</Even>
              : <Odd>{this.state.count}</Odd>)}
        </Switch>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
