
$(document).ready(function(){

var anime = ["Spirited Away", "Howl's Moving Castle", "Ponyo", "Princess Kaguya", "Paprika anime"];

$("#add").on("click", function() { 
    anime.push($("#search").val());
    console.log(anime);
    $("#buttoncontainer").empty();
    printButtons();
});

$("#clear").on("click", function() { 
    $("#buttoncontainer").empty();
    anime = ["Spirited Away", "Howl's Moving Castle", "Ponyo", "Princess Kaguya", "Paprika anime"];
    printButtons();
});

// for loop to make the buttons on the page

function printButtons () {

for (var i = 0; i < anime.length; i++) {


    var animeBtn = $("<button>");

    animeBtn.addClass("btn btn-light button");

    animeBtn.attr("data-movie", anime[i]);

    animeBtn.text(anime[i]);

    $("#buttoncontainer").append(animeBtn);

}};

printButtons();


// on click lookup API

$(document.body).on("click", ".button", function() {

    console.log("click");

    var apiKey = "8uTeNf7wGLs0qUp0OP9x9sqkDdCbIhj2"
    var movie = $(this).attr("data-movie");
   
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    movie + "&api_key=" + apiKey + "&limit=10";
   
   
    $.ajax({
       url: queryURL,
       method: "GET"
     })
       .then(function(response) {
         console.log(response);
   
           var results = response.data;
   
           for (var i = 0; i < results.length; i++){
               
               var gifDiv = $("<div class='item'>");
   
               var rating = results[i].rating;
   
               var par = $("<p>").text("Rating: " + rating);
   
               var animeImage = $("<img>");
   
               animeImage.attr("src", results[i].images.fixed_height.url);
   
   
               gifDiv.prepend(par);
               gifDiv.prepend(animeImage);
           
               $("#gifcontainer").prepend(gifDiv);
   
           }

        });

    });


});
