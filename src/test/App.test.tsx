import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('app should render', () => {
  const wrapper = render(<App />);
  
  expect(wrapper).toMatchSnapshot();
});
