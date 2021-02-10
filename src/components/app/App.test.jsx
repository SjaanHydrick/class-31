/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Show from '../shows/Show.jsx';
import ShowList from '../shows/ShowList.jsx';
import ShowDetail from '../details/ShowDetail.jsx';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders Show', () => {
    
    const arrow = [{
      'id': 29560,
      'name': 'Arrow',
      'image': 'https://static.episodate.com/images/tv-show/thumbnail/29560.jpg',
    }];

    const { asFragment } = render(
      <BrowserRouter>
        <Show {...arrow} />
      </BrowserRouter>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders Shows', () => {
    const shows = [{ id: 1, name: '', image: '' }];
    const { asFragment } = render(
      <BrowserRouter>
        <ShowList shows={shows}/>
      </BrowserRouter>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders ShowDetail', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <ShowDetail path={'shows/23455'} />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
