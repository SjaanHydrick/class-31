const URL = 'https://rickandmortyapi.com/api/character';

export const fetchCharacters = () => {
  return fetch(`${URL}`)
    .then(res => res.json())
    .then(({ characters }) => characters.map(character => ({
      id: character.id,
      name: character.name,
      image: character.image
    })));
};

export const fetchCharacterById = id => {
  return fetch(`${URL}/${id}`)
    .then(res => res.json())
    .then(json => ({
      id: json.id,
      name: json.name,
      status: json.status,
      species: json.species,
      image: json.image
    }));
};


