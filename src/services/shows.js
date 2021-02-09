const URL = 'https://www.episodate.com/api';

export const fetchShows = () => {
  return fetch(`${URL}/most-popular`)
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
      description: json.tvShow.description,
      image: json.tvShow.image_path
    }));
};


