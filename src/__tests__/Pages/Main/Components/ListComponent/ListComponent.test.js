import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import fetchData from '../../../../../__mocks__/Api'
import ListComponent from '../../../../../pages/Main/Components/ListComponent';

Enzyme.configure({ adapter: new Adapter() });
describe('ListComponent tests', () => {
  it('renders correctly', async () => {
    const mocked = await fetchData();

    if (mocked !== undefined) {
      const ComponentProps =  {
        currentCharacters: mocked,
        setOpenModal: console.log,
        setSelectedChar: console.log,
        characters: mocked,
      };

      const wrapper = shallow(<ListComponent {...ComponentProps} />);

      expect(wrapper).toMatchSnapshot();
    }
  });
});
