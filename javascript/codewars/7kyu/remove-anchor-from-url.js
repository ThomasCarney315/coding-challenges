// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
    if(url.includes('#')){
     let anchor = url.split('').indexOf('#');
     let newUrl = url.split('');
     newUrl.splice(anchor); 
     return newUrl.join('');
      } 
     else return url;
   }