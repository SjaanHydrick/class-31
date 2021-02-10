import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Buttons from './Buttons';

//couldn't figure out how to pass state to Buttons for testing

describe('pagination test', () => {
  it.skip('changes page number', () => {

    render(<Buttons />);

    const nextButton = screen.getByText('Next Page');
    const pageNumber = screen.getByText('Page 1');
    fireEvent.click(nextButton);

    return waitFor(() => {
      expect(pageNumber).toHaveTextContent('2');
    });
  });
});
