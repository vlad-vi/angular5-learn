import {OrderByPipe} from './orderby.pipe';

describe('OngoingModule:: OrderByPipe', () => {
  let pipeUnderTest;
  let data;

  beforeEach(() => {
    pipeUnderTest = new OrderByPipe();
    data = [{
      price: 222,
      name: 'prod1'
    }, {
      price: 111,
      name: 'prod2'
    }, {
      price: 333,
      name: 'prod0'
    }];
  });

  it('should order data by price', () => {
    const expectData = [{
      price: 111,
      name: 'prod2'
    }, {
      price: 222,
      name: 'prod1'
    }, {
      price: 333,
      name: 'prod0'
    }];

    const result = pipeUnderTest.transform(data, 'price', true);
    expect(result).toEqual(expectData);
  });

  it('should order by name desc', () => {
    const expectData = [
      {
      price: 333,
      name: 'prod0'
    }, {
      price: 222,
      name: 'prod1'
    }, {
      price: 111,
      name: 'prod2'
    }];
    const result = pipeUnderTest.transform(data, 'name', true);
    expect(result).toEqual(expectData);
  });
});
