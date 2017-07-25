/* 
  Helpers for reading, writing, and deleting to the usersPlaces Object in localStorage
  
*/

function initialize(key, place){
  window.localStorage.setItem('usersPlaces', '{}')
  key && place && save(key, place, JSON.stringify, JSON.parse)
}

function getPlaces(){
  return JSON.parse(window.localStorage.getItem('usersPlaces')) || []
}

function onAdd(key, place, cb, e){
  hasStoredPlaces() ? save(key, place, JSON.stringify, JSON.parse, cb) : initialize(key, place)
}

function onDelete(key, cb, e){
  let places = JSON.parse(
    window.localStorage.getItem('usersPlaces')
  )
  
  delete places[key] && 
  window.localStorage.setItem(
    'usersPlaces', JSON.stringify(places)
  )  
  cb(places)   
}

function hasStoredPlaces(){
  return window.localStorage.getItem('usersPlaces') !== null 
}

function save(key, place, stringify, parse, cb) {
  let places = parse(window.localStorage.getItem('usersPlaces'))
  places[key] = place 
  window.localStorage.setItem('usersPlaces', stringify(places))
  
  cb(places)
}

export {
  getPlaces,
  onAdd,
  onDelete
}