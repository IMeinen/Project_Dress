import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import fetchData from '../../../__mocks__/Api';
import Modal from '../../../components/Modal';

Enzyme.configure({ adapter: new Adapter() });
describe('Modal component tests', () => {
  it('renders correctly', async () => {
    const mocked = await fetchData();

    if (mocked !== undefined) {
      const ComponentProps =  {
        charInfo: mocked[0],
        modalOpened: console.log,
      };

      const wrapper = shallow(<Modal {...ComponentProps} />);

      expect(wrapper).toMatchSnapshot();
    }
  });
});
