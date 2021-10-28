import calculate from '../logic/calculate';

describe('testing calculate function', () => {
  const obj = {};
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

  test('Division', () => {
    obj.operation = '÷';
    obj.total = 6;
    obj.next = 3;
    expect(calculate(obj, '=')).toEqual({ next: null, operation: null, total: '2' });
  });
  test('Modulus', () => {
    obj.operation = '%';
    obj.total = 8;
    obj.next = 2;
    expect(calculate(obj, '=')).toEqual({ next: null, operation: null, total: '0' });
  });
});
