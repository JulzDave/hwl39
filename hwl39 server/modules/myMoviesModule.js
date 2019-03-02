var mongoClient = require('../utils/mongoHelper')

var myMoviesHandler={

    getAllMovies:()=>{

        
        const collection = mongoClient.dbConnection.collection('movies');
        var allMovies = collection.find({});
        return allMovies.toArray();



    }
}



module.exports = myMoviesHandler;