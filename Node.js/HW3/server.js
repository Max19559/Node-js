const http = require('http');
var Datastore = require('nedb');
const ODataServer = require('simple-odata-server');
const Adapter = require('simple-odata-server-nedb');
var db = new Datastore({
    inMemoryOnly: true
});
var model = {
    namespace: "jsreport",
    entityTypes: {
        "UserType": {
            "_id": {
                "type": "Edm.String",
                key: true
            },
            "test": {
                "type": "Edm.String"
            },
        },
        "WorkerType": {
            "_id": {
                "type": "Edm.String",
                key: true
            },
            "name": {
                "type": "Edm.String"
            },
            "lastname": {
                "type": "Edm.String"
            }
        }
    },
    entitySets: {
        "users": {
            entityType: "jsreport.UserType"
        },
        "workers": {
            entityType: "jsreport.WorkerType"
        }
    }
};

var odataServer = ODataServer("http://localhost:3000")
    .model(model)
    .adapter(Adapter(function (es, cb) {
        cb(null, db)
    }));

    

http.createServer(odataServer.handle.bind(odataServer)).listen(3000);

odataServer.cors('*');

const worker = {
    _id:"1234",
    name:"Max",
    lastname:"Yucho"
}

const worker1 = {
    _id:"12345",
    name:"Oleg",
    lastname:"Pop"
}

const worker2 = {
    _id:"12344",
    name:"Oleg",
    lastname:"Pop"
}


db.insert(worker);
db.insert(worker1);
db.insert(worker2);