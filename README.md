## [Google Places Clone](https://places-clone.herokuapp.com/) by Aaron Steele
### New Features
* Tutorial for new users detailing features and navigation
* Tutorial displays only for new users
* Alert users once they've successfully saved a place  
* To replay the tutorial enter the following code in your browser console 
```
localStorage.removeItem('hasVisited')
```

### Installation 
* fork/clone repo
* run npm install in the root directory  
* npm run (listens on localhost:3000)

### Technologies
* [React](https://facebook.github.io/react/)
* Google [Places](https://developers.google.com/places/) & [Map](https://developers.google.com/maps/) API
* [react-google-maps](https://github.com/tomchentw/react-google-maps)
* [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage)
* [react-materialize](http://react-materialize.github.io/#/)

### Overview
I created a simple clone of [Google Maps](https://www.google.com/maps) search feature. Users can search for any places near them and save them to the browser for later use which are accessed through a side-nav. Markers that are clicked 'activate' the corresponding place rendered in left display. 

### Challenges

After battle with several google maps react modules I learned there isn't a single one that doesn't have bugs or require monkey-patches.

Inserting custom Controls to the map was a headache due to vague documentation and not allowing access to the google maps instance, however, I was able to grab the reference and pass it as a props to the custom map components.

#### Component Hierarchical Structure

``` 
<App>
  |
  * <UsersPlaces>
  |
  * <Map>
      |
      * <SearchBox>
      |
      * <PlaceDisplay>
```
 