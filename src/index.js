import React from 'react';
import ReactDOM from 'react-dom';

const Panel = ({children}) => (
  <div className="panel panel-default">
    <div className="panel-body">
      {children}
    </div>
  </div>
);

const Well = ({children}) => <div className="well">{children}</div>;

// 👀 default value is a component
const Section = ({as = Panel, children}) => {
  // 👀 just renaming to be more explicit
  // <as>foo...</as> would have worked as well
  let Component = as;
  return <Component>{children}</Component>;
};

const App = () => (
  <div className="container">
    <Section>Default will be panel</Section>

    {/* 👀 passing in component as property */}
    <Section as={Well}>Can over-ride to "Well"</Section>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
