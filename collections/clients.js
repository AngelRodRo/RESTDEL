Clients = new Mongo.Collection('clients');

var Schema = {}

Schema.Clients = new SimpleSchema({
    name: {
        type: String
    },
    lastname:{
        type:String
    },
    dni:{
        type: Number
    }
})

Clients.attachSchema(Schema.Clients);
