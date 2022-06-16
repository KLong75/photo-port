import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';



afterEach(cleanup);

describe('Contact component renders', () => {
    it('renders', () => {
      render(<Contact />);
    });
    it('matches snapshot DOM node structure', () => {
      const { asFragment } = render(<Contact />)
      expect(asFragment()).toMatchSnapshot();
    })
}) 

describe('Contact form is visible', () => {
  it('inserts text into the h1', () => {
    const { getByTestId } = render(<Contact />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('contact')).toHaveTextContent('Contact me');
  });
})

describe('button is visible', () => {
  it('inserts text into button', () => {
    const { getByTestId } = render(<Contact />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId('button')).toHaveTextContent('Submit');
  });
})