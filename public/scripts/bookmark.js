

function addBundle(fields) {
    fetch(`/api/bookmark/${fields.bundleName ? fields.bundleName : 'My Bookmarks'}/${fields.freetId}`, {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}
function deleteBundle(fields) {
    fetch(`/api/bookmark/${fields.bundleName ? fields.bundleName : 'My Bookmarks'}`, {method: 'DELETE'})
    .then(showResponse)
    .catch(showResponse);
}
function addFreetToBundle(fields) {
    fetch(`/api/bookmark/${fields.bundleName ? fields.bundleName : 'My Bookmarks'}/${fields.freetId}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}
function removeFreetFromBundle(fields) {
    fetch(`/api/bookmark/${fields.bundleName ? fields.bundleName : 'My Bookmarks'}/${fields.freetId}`, {method: 'DELETE', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}
function viewBundlesByAuthor(fields) {
    fetch(`/api/bookmark?author=${fields.author}`)
      .then(showResponse)
      .catch(showResponse);
  }