import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

export function 

// *** EXAMPLE ***
export function getWelcome () {
  return request
    .get(`${serverURL}/welcome`)
    .then(response => response.body)
}
// ***   ***   ***


export function getTeams () {
  return request
    .get(`${serverURL}/teams`)
    .then(response => response.body)
}