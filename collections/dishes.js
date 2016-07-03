Dishes = new Mongo.Collection('dishes');

var Schema = {}

Schema.Dishes = new SimpleSchema({
    image:{
        type:String,
        optional:true
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
        type: Number,
        optional:true
    },
    created_at : {
        type:Date,
        optional:true
    }
})

Dishes.attachSchema(Schema.Dishes);
