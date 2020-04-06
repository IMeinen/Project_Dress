import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from '../../../pages/Main'

Enzyme.configure({ adapter: new Adapter() });
describe('Main page tests', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Main/>);
    expect(wrapper).toMatchSnapshot();
  });
});
