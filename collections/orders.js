
Orders = new Mongo.Collection('orders');

var Schema = {}

Schema.Orders = new SimpleSchema({
    code: {
        type: String
    },
    dishes:{
        type:[Object]
    },
    'dishes.$.id':{
        type:String
    },
    'dishes.$.name':{
        type:String
    },
    'dishes.$.quantity':{
        type:Number
    },
    'dishes.$.price':{
        type:Number,
        decimal:true
    },
    restaurant:{
        type: Object
    },
    'restaurant.id':{
        type:String
    },
    'restaurant.name':{
        type:String
    },
    user:{
        type:Object
    },
    'user.id':{
        type:String
    },
    'user.name':{
        type:String
    },
    isAble:{
        type:Boolean,
        optional:true
    },
    isCompleted:{
        type:Boolean,
        optional:true
    },
    latitude:{
        type:Number,
        optional:true
    },
    longitude:{
        type:Number,
        optional:true
    }
})

Orders.attachSchema(Schema.Orders);



// var orderSchema = new mongoose.Schema({
//     code:String,
//     dish_id:[String],
//     user_id: String,
//     restaurant_id:String,
//     date: {type:Date, default:new Date()},
//     isAble: Boolean,
//     isCompleted:Boolean,
//     latitude: Number,
//     longitude: Number
// })
