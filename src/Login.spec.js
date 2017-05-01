import React from 'react';
import {mount} from 'enzyme';
import LoginPage from './Login';

describe('Component: LoginPage', () => {
  it('enzyme: alter state by triggering click callback', () => {
    const component = mount(<LoginPage />);
    // before
    expect(component.state('credentials')).toEqual({
      emailAddress: '',
      password: '',
      rememberMe: false,
    });

    // simulate
    const emailAddress = component.find('[name="emailAddress"]');
    emailAddress.node.value = 'test';
    emailAddress.simulate('change');

    // after
    expect(component.state('credentials')).toEqual({
      emailAddress: 'test',
      password: '',
      rememberMe: false,
    });

    // simulate
    const rememberMe = component.find('[name="rememberMe"]');
    rememberMe.node.checked = true;
    rememberMe.simulate('change');

    // after
    expect(component.state('credentials')).toEqual({
      emailAddress: 'test',
      password: '',
      rememberMe: true,
    });
  });
});
