import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Loading from '../../../components/Loading';

Enzyme.configure({ adapter: new Adapter() });
describe('Loading component tests', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });
});
