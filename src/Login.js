import React from 'react';

export const LogInForm = ({credentials, onInputChange, onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="emailAddress">Email address</label>
        <input
          name="emailAddress"
          type="email"
          className="form-control"
          id="emailAddress"
          onChange={onInputChange}
          value={credentials.emailAddress}
          placeholder="Email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="password"
          onChange={onInputChange}
          value={credentials.password}
          placeholder="Password"
        />
      </div>
      <div className="checkbox">
        <label>
          <input
            name="rememberMe"
            type="checkbox"
            checked={credentials.rememberMe}
            onChange={onInputChange}
          />
          {' '}
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-default">Submit</button>
    </form>
  );
};

class LoginPage extends React.Component {
  state = {
    credentials: {
      emailAddress: '',
      password: '',
      rememberMe: false,
    },
  };

  _handleInputChange = event => {
    const {name, type, checked, value} = event.target;
    const nextValue = type === 'checkbox' ? checked : value;

    this.setState(prevState => ({
      credentials: {
        ...prevState.credentials,
        [name]: nextValue,
      },
    }));
  };

  _handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <div className="starter-template">
          <h1>Fun With Forms</h1>
          <LogInForm
            credentials={this.state.credentials}
            onInputChange={this._handleInputChange}
            onSubmit={this._handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default LoginPage;
