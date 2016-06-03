Dishes = new Mongo.Collection('dishes');

var Schema = {}

Schema.Dishes = new SimpleSchema({
    name: {
        type: String
    },
    type:{
        type:String
    },
    price:{
        type: Number
    },
    score:{
        type: Number
    },
    created_at : {
        type:Date
    }
})

Dishes.attachSchema(Schema.Dishes);
