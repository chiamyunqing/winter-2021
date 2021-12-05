//ajax - asynchronous (no need page refresh) javascript and xml (data format)
//AJAJson actually
var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");

var btn = document.getElementById("btn"); //get the button
btn.addEventListener("click", function() {
    //download data on fly and save to data
    var ourRequest = new XMLHttpRequest(); //we only want it to download when someone clicks button
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
    //what to do after downloading
    ourRequest.onload = function() {
    /*
     //browser interprets as giant text string
    var ourData = ourRequest.responseText;
    console.log(ourData[0]);
    */
        var ourData = JSON.parse(ourRequest.responseText); //converts to json
        renderHTML(ourData);
    };
    
    ourRequest.onerror = function() {
        console.log("connection error");
    };

    ourRequest.send(); //send ajax request
    pageCounter++;
    if (pageCounter > 3) {
        btn.style.visibility='hidden';
    }
});


//function which job is just to show html, to add to the empty div
function renderHTML(data) {
    var htmlString = "";
    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + ".</p>";
    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
