import {getCounterValue} from './getCounterValue';

describe('getCounterValue', () => {
  test('work with empty state', () => {
    // проверяем. что при передаче пустого стейта нам вернется 0
    expect(getCounterValue({})).toBe(0);
  });

  test('work with filled state', () => {
    // проверяем. что при передаче не пустого стейта нам вернется 100
    expect(getCounterValue({counter: {value: 100}})).toBe(100);
  });
});
