

var boton = document.getElementById("formBuscar");

boton.addEventListener("submit",function(event){
	event.preventDefault();
	fetch(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${document.getElementById("inputBuscar").value}`, {
      headers: {
        Accept: 'application/json'
      },
      method: 'GET'
    })
    .then(res => {
      console.log("Response here")
      return res.json()
    })
    .then(r => {
      results= r.artists;
      console.log("done");
      showArtistInfo();
      
    })
    .catch(e => {
      console.error("Error " + e)
    })
    return false;
  })

function showArtistInfo(){
	let panel = document.getElementById("infoartista");

	if(results!=null){
	
	panel.innerHTML = '<div class = "container">'+
			'<div class="row gy-5">'+
				'<div class="col-sm-6">'+
						'<dl>'+
					  '<dt>Nombre:</dt>'+
					  `<dd>${results[0].strArtist}</dd>`+
					  '<dt>Formado en:</dt>'+
					  `<dd>${results[0].intFormedYear}</dd>`+
					  '<dt>Género musical:</dt>'+
					  `<dd>${results[0].strStyle}</dd>`+
					  '<dt>Originario de:</dt>'+
					  `<dd>${results[0].strCountry}</dd>`+
					'</dl>'+
				'</div>'+
				'<div class="col-sm-6">'+
					'<div class="p-5">'+
	    			`<img src="${results[0].strArtistLogo}" class= "img-thumbnail" width="300" height="250" alt= "concert1">`+
	    		    '</div>'+
				'</div>'+
			'</div>'+
		'</div>';
		panel.style.display="block";
   }else{
   	console.log("Es null");
   	alert("No esxiste ningún artista con ese nombre");
   }
}

