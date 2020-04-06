import {filterData} from '../../utils/filterData';

describe('FilterData util test', () => {
  it('test data being filtered',() => {
    const filterExample = filterData([{name: 'maria'},{name: 'joao'},{name: 'josé'}],"mar");

    expect(filterExample).toStrictEqual([ { name: 'maria' } ]);
  });
});
