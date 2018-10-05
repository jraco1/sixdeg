/* global $ */

// Variables
var apiKey = "?api_key=RGAPI-07aaa183-9681-4962-b65c-725a4be29a0c";      //expires Sat Oct 6th @ 10:03am

$(document).ready(function() {
    
    $("#submitButton").click (function (e) {
        e.preventDefault();
        
        var name = $("#pokeName").val();
        var url = "https://pokeapi.co/api/v2/pokemon/" + name + "/";
        
        $.ajax({
            url : url,
            dataType : 'json',
            success : function(data) {
                var background = data.sprites['front_default'];
                $('#poke1').css('background-image', 'url(' + background + ')');
                
                var pokeName = data['name'];
                var pokeHeight = data['height'];
                var pokeWeight = data['weight'];
                var pokemonId = data['id'];
                
                var pokeName2 = capitalizeFirstLetter(pokeName);
                $("#pokeTitle").html(pokeName2);
                $("#pokeId").html('( ' + pokemonId + ' )');
                loadDescription(pokemonId);
                $("#pokeHeight").html('Height: ' + pokeHeight);
                $("#pokeWeight").html('Weight: ' + pokeWeight);
                $("#pokePic").html('<img src=\'' + background + '\'>');
            }
        });
    
        
        /*
        var urlMatch = "https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/" + accountId + apiKey + "&endIndex=10";
        var champions = [];
        var games = [];
        
        $.ajax({
            url : urlMatch,
            dataType : "json",
            success : function(parsed_json) {
                $.each(parsed_json.matches , function(key , value){ // First Level
                    champions.push(value.champion);
                    games.push(value.gameId);
                    
                    console.log(value.champion);
                    console.log(value.gameId);
                });
            }
        });*/
    });
});
function loadDescription(idTemp) {
    
    var pokeId = idTemp;
    console.log(pokeId);
    var url2 = "https://pokeapi.co/api/v2/characteristic/" + pokeId + "/";
    
    
    $.ajax({
        url : url2,
        dataType : 'json',
        success : function(dataChar) {
            var pokeDescription = dataChar.descriptions[1]['description'];
            $("#pokeDescription").html('Description: ' + pokeDescription);
        },
        error: function () {
            $("#pokeDescription").html("");
            console.log("error");
        }
    }); 
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}