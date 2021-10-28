import { React } from 'react';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

describe('Calculator component', () => {
  it('Just Renders', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('can render and update result', () => {
    act(() => {
      ReactDOM.render(<Calculator />, container);
    });
    const numBtn = container.querySelectorAll('.grayBtn')[3];
    const result = container.querySelector('.result');
    expect(result.textContent).toBe('0');

    act(() => {
      numBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(result.textContent).toBe('7');
  });
});
