import { React } from 'react';

import TestRenderer from 'react-test-renderer'; 

import Calculator from '../components/Calculator';

it('renders', () => {
  const tree = TestRenderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
