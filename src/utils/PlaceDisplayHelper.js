/*
  Helpers for adding PlaceDisplay component to react-google-maps GoogleMap component 
  
*/

function mountPlaceElementToMap(element, controlPosition, map){
  return map.controls[controlPosition].push(element) - 1
}

function unMountPlaceElementFromMap(index, controlPosition, map){
  return map.controls[controlPosition].removeAt(index)
}

export {
  mountPlaceElementToMap,
  unMountPlaceElementFromMap,
}