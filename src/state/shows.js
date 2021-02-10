const URL = 'https://www.episodate.com/api';

export const fetchShows = (count) => {
  return fetch(`${URL}/most-popular/?page=${count}`)
    .then(res => res.json())
    .then(({ tv_shows }) => tv_shows.map(show => ({
      id: show.id,
      name: show.name,
      image: show.image_thumbnail_path
    })));
};

export const fetchShowById = id => {
  return fetch(`${URL}/show-details/?q=${id}`)
    .then(res => res.json())
    .then(json => ({
      id: json.tvShow.id,
      name: json.tvShow.name,
      status: json.tvShow.status,
      description: (json.tvShow.description)
        .replace(/<br>/g, ' ')
        .replace(/<b>/g, '')
        .replace('</b>', ''),
      image: json.tvShow.image_path
    }));
};

