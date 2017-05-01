import React from 'react';

const Alert = props => (
  <div className={`alert alert-${props.type || 'info'}`} role="alert">
    {props.title && <strong>{props.title} - </strong>}
    {props.children}
  </div>
);

export default Alert;
