const { mongoKey } = require('./keys');
let MongoClient = require('mongodb').MongoClient;

function getEmails (){
    MongoClient.connect(mongoKey, { useUnifiedTopology: true },function (err, client) {
        if (err) throw err;
        let db = client.db('Caillou');
        db.collection('emails').find('').toArray((error, result) => {
            if(error)
                return error;
            let emails = [];
            result.forEach(element => {
               emails.push(element.email);
            });
            return emails;
        });
    });
}

getEmails();
module.exports = {getEmails};