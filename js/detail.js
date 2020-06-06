window.onload = function(){

var queryString = location.search
var queryStringObj = new URLSearchParams(queryString);
var idQuerySelector = queryStringObj.get("id")
console.log(idQuerySelector)

//query string type
var typeQuerySelector = queryStringObj.get("type")



fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/+"+typeQuerySelector+"/"+idQuerySelector)
.then(function(response) {
    return response.json() 
  })

    .then(function(resultado) {
      //TRACK
        var trackTitle = resultado.title;
        var trackAlbum = resultado.album.title;
        var trackDate = resultado.album.release_date;
        var trackCover = resultado.album.cover_big;
        var docNombreCancion = document.querySelector(".nombre");
        var docNombreAlbum = document.querySelector (".album-name");
        var docFechaAlbum = document.querySelector (".album-date");
        var docFotoAlbum = document.querySelector (".foto1");
        docNombreCancion.innerHTML+=trackTitle;
        docNombreAlbum.innerHTML += trackAlbum;
        docFechaAlbum.innerHTML += trackDate;
        docFotoAlbum.innerHTML += "<img class= 'fotodetail' src='"+trackCover+" ' alt='albumcover'>"
        var add = document.querySelector(".datos-add")
        
      //ALBUM

      //ARTIST

      //GENRE
        
        
        
        
        
        // add.onclick = addToPlaylist
        add.addEventListener('click',function(){
         playlist.push(resultado.id)
        console.log (playlist)
        })
      
      })

   .catch(function(error) {
     console.log("Error: " + error);
   })

   var playlist = [];
   localStorage.setItem('playlist', JSON.stringify(playlist));
   localStorage.getItem('playlist')
   JSON.parse(localStorage.getItem(playlist));




//if(typeQuerySelector!="artist"){
//  var trackInfo = document.querySelector(".info");
 // trackInfo.style.display="none"
}







}