function isNewVisitor(){
  let hasVisited = window.localStorage.getItem('hasVisited')
  if(hasVisited) return false 
  else{
    window.localStorage.setItem('hasVisited', true)
    return true
  }
}

export default isNewVisitor