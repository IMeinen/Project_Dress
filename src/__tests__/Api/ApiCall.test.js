import fetchData from '../../__mocks__/Api';

import {api} from '../../services/api';

it('should load correctly API', async () => {
    const mocked = await fetchData();

    const res = await api.getCharactersData();

    const compare = (JSON.stringify(mocked[0]) === JSON.stringify(res[1][0]));
    expect(compare).toBe(true);

});
