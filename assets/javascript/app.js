
var anime = ["Spirited Away", "Howl's Moving Castle", "Ponyo", "Princess Kaguya", "Paprika movie"];



// for loop to make the buttons on the page

for (var i = 0; i < anime.length; i++) {


    var animeBtn = $("<button>");

    animeBtn.addClass("btn btn-secondary");

    animeBtn.attr("data-movie", anime[i]);

    animeBtn.text(anime[i]);

    console.log(animeBtn);

    $("#buttoncontainer").append(animeBtn);

};



