import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Overlay from '../../../components/Overlay';

Enzyme.configure({ adapter: new Adapter() });
describe('Overlay component tests', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Overlay>
        <div />
      </Overlay>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
