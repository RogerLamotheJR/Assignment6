// Variables
var authKey ="wxysc7FKWD7kvvTAGnn5z8KMZaGexVaj";
var queryURLBase ="https://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=2&sort=oldest&api-key=wxysc7FKWD7kvvTAGnn5z8KMZaGexVaj"

//Search Parameters Variables
var queryTerm   ="";
var numResult   = 0;
var startYear   = 0;
var endYear     = 0;

//Search Results Variables
var articleCounter = 0;

// Functions
function runQuery(numArticles, queryURL) {
    $.ajax({url: queryURL, method: "GET"})
    .done(function(NYTData) {
        for(var i=0; i<numResults; i++){
            console.log(NYTData.response.docs[i].headline.main);
            console.log(NYTData.response.docs[i].section_name);
            console.log(NYTData.resopnse,docs[i].pub_date);
            console.log(NYTData.resopnse,docs[i].byline.original);
            console.log(NYTData.resopnse,docs[i].web_url);    
        }
            //Start HTML Jquery Here
            var wellSection = $("<div>");
            wellSection.addClass("well");
            wellSection.attr("id", "articleWell-" + i);
            $("#wellSection").append(wellSection);

            //Attach content to well
            
            $("#articleWell-" + i).append("<h3>" + NYTData.resopnse.docs[i].headline.main + ",/h3>");
            $("#articleWell-" + i).append("<h5>" + NYTData.resopnse.docs[i].section_name + ",/h5>");
            $("#articleWell-" + i).append("<h5>" + NYTData.resopnse.docs[i].pub_date + ",/h5>");
            $("#articleWell-" + i).append("<h5>" + NYTData.resopnse.docs[i].byline.original + ",/h5>");
            $("#articleWell-" + i).append("<h5>" + NYTData.resopnse.docs[i].web_url + ",/h5>");



        //Log to Console    
        console.log(queryURL);
        console.log(numArticles);
        console.log(NYTData);
    })
}

// Main Processes

//On click button
$("#searchBtn").on("click", function(){
event.preventDefault()
    queryTerm = $("#search").val().trim();
    //console.log(queryTerm);

    //Add a Search Term
    var newURL =queryURLBase + "&q" + queryTerm;
        console.log("newURL: "+ newURL);
        console.log(queryURLBase);
        console.log(queryTerm);
        console.log("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=2&sort=oldest&api-key=wxysc7FKWD7kvvTAGnn5z8KMZaGexVaj")
    //Get Number of Records
    numResults = $("#numRecords").val();
        console.log(numResults);
    // Getting the start and end year
    startYear =$("#startYear").val().trim();
    endYear =$("#endYear").val().trim();

    if (parseInt(startYear)){
        startYear + startYear + "0101";
        newURL = newURL + "&begin_date=" + startYear;
    }

    if (parseInt(endYear)){
        endYear = endYear + "0101";
        newURL = newURL + "&end_date=" + endYear;
    }
    

    //Send AJAX call the new assembled URL
    //runQuery(10, "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=2&sort=oldest&api-key=wxysc7FKWD7kvvTAGnn5z8KMZaGexVaj");
    runQuery(numResults, newURL);

    
})
