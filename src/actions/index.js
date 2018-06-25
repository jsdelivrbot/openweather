const API_KEY  = '0e17abce572a27ddbd3f7a83211f76b6';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
let nextId = 0;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = fetch(url).then(response => response.json());

  console.log('Request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
    id: ++nextId
  }
}
