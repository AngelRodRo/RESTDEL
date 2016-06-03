Restaurants = new Mongo.Collection('restaurants');

var Schema = {};

Schema.Restaurants = new SimpleSchema({
    title:{
        type:String
    },
    slug:{
        type: String
    },
    address:{
        type: String
    },
    phone:{
        type: String
    } ,
    celphone:{
        type: String
    },
    social:{
        type:[String]
    },
    ruc: {
        type: String
    },
    dishes:{
        type: [Object]
    },
    owner:
    {
        type: Object
    },
    created_at:{
        type:Date
    }
});

Restaurants.attachSchema(Schema.Restaurants);
