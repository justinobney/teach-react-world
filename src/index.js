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
const Section = ({as = Panel, renderContainer, children}) => {
  // 👀 just renaming to be more explicit
  // <as>foo...</as> would have worked as well
  if (typeof renderContainer === 'function') {
    return renderContainer(children);
  }

  let Component = as;
  return <Component>{children}</Component>;
};

const App = () => (
  <div className="container">
    <Section>Default will be panel</Section>

    {/* 👀 passing in component as property */}
    <Section as={Well}>Can over-ride to "Well"</Section>

    {/* 👀 passing in render function as property */}
    <Section
      renderContainer={children => (
        <div className="jumbotron">
          <h1>Look ma!</h1>
          {children}
        </div>
      )}
    >
      Can over-ride via renderContainer for more control
    </Section>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
