/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import showByIdResponse from '../fixtures/showById.json';
import ShowById from './ShowById';

const server = setupServer(
  rest.get('https://www.episodate.com/api/show-details/?q=29560', (req, res, ctx) => {
    return res(ctx.json(showByIdResponse));
  })
);

describe('ShowById container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches and displays a shows details', async() => {
    render(<ShowById match={{ params: { id: '29560' } }} />);

    screen.getByAltText('loading');

    return waitFor(() => {
      screen.getByText('Arrow');
      screen.getByText('Status: Ended');
      screen.getByText('Arrow is an American television series developed by writer/producers Greg Berlanti, Marc Guggenheim, and Andrew Kreisberg. It is based on the DC Comics character Green Arrow, a costumed crime-fighter created by Mort Weisinger and George Papp. It premiered in North America on The CW on October 10, 2012, with international broadcasting taking place in late 2012. Primarily filmed in Vancouver, British Columbia, Canada, the series follows billionaire playboy Oliver Queen, portrayed by Stephen Amell, who, five years after being stranded on a hostile island, returns home to fight crime and corruption as a secret vigilante whose weapon of choice is a bow and arrow. Unlike in the comic books, Queen does not go by the alias "Green Arrow". The series takes a realistic look at the Green Arrow character, as well as other characters from the DC Comics universe. Although Oliver Queen/Green Arrow had been featured in the television series Smallville from 2006 to 2011, the producers decided to start clean and find a new actor (Amell) to portray the character. Arrow focuses on the humanity of Oliver Queen, and how he was changed by time spent shipwrecked on an island. Most episodes have flashback scenes to the five years in which Oliver was missing.');
    });
  });
});
