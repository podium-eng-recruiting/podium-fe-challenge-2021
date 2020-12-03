const API_ROOT_URL = "https://swapi.dev/api";

const request = path => {
  return fetch(`${API_ROOT_URL}/${path}`)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));
};

export const fetchPeople = () => {
  const path = "people";
  const result = request(path);
  return result;
};
