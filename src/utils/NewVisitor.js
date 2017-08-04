function isNewVisitor(){
  let hasVisited = window.localStorage.getItem('hasVisited')
  console.log(hasVisited)
  if(hasVisited) return false 
  else{
    // window.localStorage.setItem('hasVisited', true)
    return true 
  }
}

export default isNewVisitor