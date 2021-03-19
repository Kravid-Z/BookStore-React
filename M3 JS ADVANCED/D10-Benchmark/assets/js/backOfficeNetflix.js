console.log("backOffice Netflix connected");

//END-POINT ------------------------------------------------------------------------------------
/** 
GET https://striveschool-api.herokuapp.com/api/movies/ 

return an array with the available categories
[ "drama", "comedy" ... ] //N.B.: The category list is not fixed, it's generated FROM your movies and therefore until movies are added this list will be []
*/

//------------------------------------------------------------------------------------

/** 
GET on https://striveschool-api.herokuapp.com/api/movies/{category}

will return an array of movies from the given {category}.

Ex:
[
    {
        "_id": "5d3598a3a38caa57a0272d33", //SERVER GENERATED
        "name": "Random drama movie",
        "description": "A description of the movie",
        "category": "drama",
        "imageUrl": "https://bit.ly/3bVHHZ4",
        "userId": "admin",  //SERVER GENERATED
        "createdAt": "2019-07-22T11:06:11.784Z",  //SERVER GENERATED
        "updatedAt": "2019-07-22T11:06:11.784Z",  //SERVER GENERATED
        "__v": 0  //SERVER GENERATED
    }
]
*/
//------------------------------------------------------------------------------------