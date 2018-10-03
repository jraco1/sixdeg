/* global $ */

// Variables
var score = 0;
var path = new Array(); // Used to keep track of history
var castList = false; // False for "Movie cast view" state, true for "Person credits" view.
var startID;


$(document).ready(function() {
    
    loadSetup();
    
    $("#start").click (function (e) {
        e.preventDefault();
        
        // Start game
        score = 0;
        path = new Array();
        castList = false;
        startID = Math.random() // TODO find out the limits on personID #'s in TMDB.
        loadGame();
    });
    
    // Ajax handling.  Need to find a way to catch clicking on a link without hyperlinking
    // (For score handling/page updating) Might move this code out of a .click function.
    $("guess").click (function (e){
        
        var url="api.themoviedb.org/";
        
        $.ajax({
            url : url,
            dataType : "json",
            success : function (data) {
                
                console.log (data);
                $("#jumplist").html (jsonToHTML (data));
            }
        });
    });
});

function loadSetup() {
    
    var html = "";
    
    // We can use the following to load html from another html file.
    // $("#y").load("x.html");
    
    $("#gameField").html (html);
}

function loadGame() {
    
    var html;
    
    
    
    $("#gameField").html (html);
}

function loadResult() {
    
    var html;
    
    
    $("#gameField").html (html);
    
}

// Transform a json obj into displayable html
function jsonToHTML (data) {
    
    var html;
    
    
    
    return html;
}