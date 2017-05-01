import Alert from './Alert';
import React from 'react';
import {create} from 'react-test-renderer';

describe('Component: Alert', () => {
  it('should render with title and children', () => {
    const tree = create(<Alert title="Title" children="Content" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should allow skipping title', () => {
    const tree = create(<Alert children="Content" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should default type to info', () => {
    const tree = create(<Alert children="Content" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should allow setting alert type', () => {
    const tree = create(<Alert children="Content" type="danger" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
