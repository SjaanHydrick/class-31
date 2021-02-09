const URL = 'https://www.episodate.com/api/most-popular?page=1';

export const fetchShows = () => {
  return fetch(`${URL}`)
    .then(res => res.json())
    .then(({ shows }) => shows.map(show => ({
      id: show.id,
      name: show.name,
      image: show.image_thumbnail_path
    })));
};

export const fetchShowById = id => {
  return fetch(`${URL}/show-details/?q=${id}`)
    .then(res => res.json())
    .then(json => ({
      id: json.id,
      name: json.name,
      status: json.status,
      description: json.description,
      image: json.image_path
    }));
};


