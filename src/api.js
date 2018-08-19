import { mapServerData } from './mappers';

export function loadList() {
  return fetch('/api/stations')
    .then(response => response.json())
    .then(mapServerData);
}

// Поправил codestyle

export function loadDetails(id) {
  return fetch(`/api/stations/${id}`)
    .then(response => response.json())
}
