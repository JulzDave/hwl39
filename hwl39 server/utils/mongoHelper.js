const MongoClient = require('mongodb').MongoClient;
url = 'mongodb://localhost:27017';
dbName = 'hwl39s';

var mongohelper = {
    dbConnection: null,
    connect: function() {
        MongoClient.connect(url, (err, client) => {
            if (err) throw err;
            console.log("Connected successfully to server");
            const db = client.db(dbName);
            // console.log(allMovies)
            this.dbConnection = db;
        });
    }

}






module.exports = mongohelper;