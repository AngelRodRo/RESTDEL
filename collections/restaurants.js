Restaurants = new Mongo.Collection('restaurants');

var Schema = {};

Schema.Restaurants = new SimpleSchema({
    title:{
        type:String
    },
    slug:{
        type: String,
        optional:true
    },
    address:{
        type: String
    },
    phone:{
        type: String
    } ,
    celphone:{
        type: String,
        optional:true
    },
    social:{
        type:[String],
        optional:true
    },
    ruc: {
        type: String,
        optional:true
    },
    dishes:{
        type: [Object],
        optional:true
    },
    owner_id:
    {
        type: String
    },
    created_at:{
        type:Date,
        optional: true
    }
});


Restaurants.attachSchema(Schema.Restaurants);
