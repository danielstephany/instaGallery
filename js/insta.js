
 var gallery =  document.getElementById("instaGallery");

 $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: "https://api.instagram.com/v1/users/{user-id}/media/recent/?access_token=ACCESS-TOKEN",
      success: function(data) {
       var toHtml = " ";
       var gallery =  document.getElementById("instaGallery");
	   
        for(var i = 0; i < data.data.length; i++) {
          for(var p = 0; p < data.data[i].tags.length; p++) { 
            if(data.data[i].tags[p].toLowerCase() === "tag") { //replace tag with a photo any with any tag you choose to search for your photos
              toHtml += "<li class='content'><a href='" + data.data[i].link + "'><img src='" + data.data[i].images.standard_resolution.url + "'></a></li>";
            }
          } //second for loop
        } //first for loop
      console.log(toHtml);
      gallery.innerHTML = toHtml;
      } //success function
    });
