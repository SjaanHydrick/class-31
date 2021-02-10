import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Buttons from './Buttons';

describe('pagination test', () => {
  it('changes page number', async() => {
    render(<Buttons />);

    const nextButton = screen.getByText('Next Page');
    const pageNumber = screen.getByText('Page 1');
    fireEvent.click(nextButton);

    return waitFor(() => {
      expect(pageNumber).toHaveTextContent('2');
    });
  });
});
