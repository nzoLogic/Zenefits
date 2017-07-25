/* 
   Helpers for getting, setting, and deleting persistent data in the browser
*/

function checkStoredLocation(key){
  const loc = window.localStorage.getItem(key)
  return loc ? JSON.parse(loc) : null 
}

function saveUserLocation(location){
  window.localStorage.setItem('lastLocation', location)
}

export {
  checkStoredLocation,
  saveUserLocation,
  
}