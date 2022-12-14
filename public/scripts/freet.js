/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function viewAllFreets(fields) {
  fetch('/api/freets')
    .then(showResponse)
    .catch(showResponse);
}

function viewFreetsByAuthor(fields) {
  fetch(`/api/freets?author=${fields.author}`)
    .then(showResponse)
    .catch(showResponse);
}

function viewFreetsByFilter(fields) {
  fetch(`/api/freets?author=${fields.author}&media=${fields.media}&startdate=${fields.startdate}&enddate=${fields.enddate}`)
    .then(showResponse)
    .catch(showResponse);
}

function createFreet(fields) {
  fetch('/api/freets', {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function editFreet(fields) {
  fetch(`/api/freets/${fields.id}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function deleteFreet(fields) {
  fetch(`/api/freets/${fields.id}`, {method: 'DELETE'})
    .then(showResponse)
    .catch(showResponse);
}

function likeFreet(fields) {
  fetch(`/api/freets/${fields.id}/like`, {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function reFreetFreet(fields) {
  fetch(`/api/freets/${fields.id}/refreet`, {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function downvoteFreet(fields) {
  fetch(`/api/freets/${fields.id}/downvote`, {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function unlikeFreet(fields) {
  fetch(`/api/freets/${fields.id}/like`, {method: 'DELETE'})
    .then(showResponse)
    .catch(showResponse);
}

function unreFreetFreet(fields) {
  fetch(`/api/freets/${fields.id}/refreet`, {method: 'DELETE'})
    .then(showResponse)
    .catch(showResponse);
}

function undownvoteFreet(fields) {
  fetch(`/api/freets/${fields.id}/downvote`, {method: 'DELETE'})
    .then(showResponse)
    .catch(showResponse);
}