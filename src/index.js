// stolen right from: https://reacttraining.com/react-router/web/example/basic
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  withRouter,
} from 'react-router-dom';

// function to fake API call with some latency
function fakeSessionApiCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        permissions: ['home', 'topics'],
        defaultPage: '/about',
      });
    }, 1000);
  });
}

// main focus of this example
class App extends React.Component {
  state = {
    loading: true,
    session: {},
  };

  async componentWillMount() {
    const { history } = this.props; // comes from 'withRouter' HOC
    const session = await fakeSessionApiCall();
    history.push(session.defaultPage);
    this.setState({
      loading: false,
      session: session,
    });
  }

  _canRouteTo(route) {
    const { session } = this.state;
    if (!session.permissions) {
      return false;
    }
    return session.permissions.indexOf(route) > -1;
  }

  _renderRoutes = () => {
    return (
      <Switch>
        {this._canRouteTo('home') && <Route exact path="/" component={Home} />}
        {this._canRouteTo('about') && <Route path="/about" component={About} />}
        {this._canRouteTo('topics') &&
          <Route path="/topics" component={Topics} />}
        <Redirect to="/" />
      </Switch>
    );
  };

  render() {
    const { loading } = this.state;
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>

        <hr />

        {!loading && this._renderRoutes()}
        {loading && 'Loading...'}
      </div>
    );
  }
}

// decorate App component to have access to router properties/methods
const AppWithRouter = withRouter(App);

// supplimental pages for example
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

// initialize application
ReactDOM.render(
  <Router>
    <AppWithRouter />
  </Router>,
  document.getElementById('root')
);
