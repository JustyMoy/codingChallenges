// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"
//P:will there be any special characters?
//R: return string without #
//E: shoe#.com --> shoe.com
//P: filter string if === # splice and return

function removeUrlAnchor(url){
    return url.split('#')[0];
}

//another soln
function removeUrlAnchor(url){
    let string = ""
    for(let i = 0; i < url.length; i++){
      if(url[i] === "#") { break }
      string += url[i]
    }
    return string 
  }