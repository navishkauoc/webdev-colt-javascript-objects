var movie = [
    {
        title: "No Country for old men",
        rating: 8.5,
        hasWatched: true
    },
    {
        title: "Bird man",
        rating: 8.4,
        hasWatched: false
    },
    {
        title: "Argo",
        rating: 8.7,
        hasWatched: true
    }
];

for(var i=0; i<=movie.length-1; i++){
    var watchBoolVal = movie[i].hasWatched;
    var watchStatus;
    if(watchBoolVal){
        watchStatus = "watched";
    } else{
        watchStatus = "not watched";
    }
    console.log("You " + watchStatus + " " + movie[i].title + " - " + movie[i].rating + " stars");
}