import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FilterInput from '../../../components/FilterInput';

Enzyme.configure({ adapter: new Adapter() });
describe('FilterInput component tests', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<FilterInput data={[]} set={console.log} />);
    expect(wrapper).toMatchSnapshot();
  });
});
