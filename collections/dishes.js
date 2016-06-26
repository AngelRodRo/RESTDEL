Dishes = new Mongo.Collection('dishes');

var Schema = {}

Schema.Dishes = new SimpleSchema({
    image:{
        type:String
    },
    name: {
        type: String
    },
    type:{
        type:String
    },
    price:{
        type: Number
    },
    restaurantId:{
        type:String
    },
    score:{
        type: Number
    },
    created_at : {
        type:Date
    }
})

Dishes.attachSchema(Schema.Dishes);
