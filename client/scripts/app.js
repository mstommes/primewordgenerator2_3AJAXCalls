var adjOneArray = [];
var adjTwoArray = [];
var nounArray = [];
var click = 0;
var dataFlag1 = false;
var dataFlag2 = false;
var dataFlag3 = false;


function getData(data){
    $.ajax({
        url: "/adj1",
        success: function(data) {
            adjOneArray = data;
            dataFlag1 = true;
            getRandomValue(adjOneArray);
            return dataFlag1;
        }
    });
    $.ajax({
        url: "/adj2",
        success: function(data) {
            adjTwoArray = data;
            dataFlag2 = true;
            getRandomValue(adjTwoArray);
            return dataFlag2;
        }
    });
    $.ajax({
        url: "/noun",
        success: function(data){
            nounArray = data;
            dataFlag3 = true;
            getRandomValue(nounArray);
            return dataFlag3;
        }
    });
}
//function getData(data){
//    $.ajax({
//        url: "/data",
//        success: function(data){
//            $.each(data, function(){
//                adjOneArray.push(this.adj1);
//                adjTwoArray.push(this.adj2);
//                nounArray.push(this.noun);
//            });
//            getRandomValue(adjOneArray);
//            getRandomValue(adjTwoArray);
//            getRandomValue(nounArray);
//        }
//    });
//}

function getRandomValue(array){
    var random = Math.floor(Math.random()* array.length);
    return random;
}

function appendWords(){
    $('#program-description').append('<p>' + adjOneArray[getRandomValue(adjOneArray)] + " " + adjTwoArray[getRandomValue(adjTwoArray)] + " " + nounArray[getRandomValue(nounArray)] + '</p>');
}

function removeWords(){
    $('p').first().remove();
}

$(document).ready(function(){
    getData();
    $('#randomizer').on('click', function(){
        if(dataFlag1 && dataFlag2 && dataFlag3){
            appendWords();
            click++;
            if(click > 1){
                removeWords();
            }
        }
    });
});