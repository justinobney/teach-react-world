import React from 'react';
import axios from 'axios';

class ApiExample extends React.Component {
  state = {
    loading: true,
    person: {},
  };
  componentWillMount() {
    axios
      .get('http://swapi.co/api/people/1/')
      .then(({data}) => {
        this.setState({loading: false, person: data});
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const {loading, person} = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">{person.name}</div>
          <ul className="list-group">
            <li className="list-group-item">Birth Year: {person.birth_year}</li>
            <li className="list-group-item">Gender: {person.gender}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ApiExample;
