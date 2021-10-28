import operate from '../logic/operate';

describe('Testing operate file', () => {
  test('Addition', () => { expect(operate('1', '2', '+')).toBe('3'); });
  test('Substraction', () => { expect(operate(1, 2, '-')).toBe('-1'); });
  test('Multiplication', () => { expect(operate(1, 2, 'x')).toBe('2'); });
});
