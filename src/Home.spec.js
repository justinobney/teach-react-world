import React from 'react';
import {shallow} from 'enzyme';
import {create} from 'react-test-renderer';
import Home from './Home';

describe('Component: Home', () => {
  it('basic render', () => {
    const tree = create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('alter state by triggering click callback', () => {
    const component = create(<Home />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    /*
    * - div.container
    *   - div.starter-template
    *     - h1
    *     - button <-- onClick
    *     - hr
    *     - Alert
    */
    tree.children[0].children[1].props.onClick();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('enzyme: alter state by triggering click callback', () => {
    const component = shallow(<Home />);
    // before
    expect(component.state('type')).toBe('info');
    // simulate
    component.find('[onClick]').simulate('click');
    // after
    expect(component.state('type')).toBe('danger');
  });
});
