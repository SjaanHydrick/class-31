/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import showsApiResponse from '../fixtures/shows.json';
import { MemoryRouter } from 'react-router-dom';
import ShowsPage from './ShowsPage';
import { ThemeProvider } from '../state/showContext';

const server = setupServer(
  rest.get('https://www.episodate.com/api/most-popular/?page=1', (req, res, ctx) => {
    return res(ctx.json(showsApiResponse));
  })
);

describe('ShowsPage container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches and displays a list of shows', async() => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <ShowsPage />
        </MemoryRouter>
      </ThemeProvider>
    );

    screen.getByAltText('loading');

    const listOfShows = await screen.findByTestId('shows');

    return waitFor(() => {
      expect(listOfShows).not.toBeEmptyDOMElement();
    });
  });
});
