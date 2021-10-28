import calculate from '../logic/calculate';

describe('testing calculate function', () => {
  test('undefined when calculate by zero', () => {
    const obj = {
      total: '0',
      next: '0',
      operation: '+',
    };
    const buttonName = '0';
    expect(calculate(obj, buttonName).next).toBeUndefined();
  });

  test('substraction', () => {
    const obj = {
      total: 0,
      next: 0,
      operation: '-',
    };
    const buttonName = '0';
    expect(calculate(obj, buttonName).total).toBe(0);
  });
});
