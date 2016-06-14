Meteor.publish('results',function (type,name) {

    check(type,String);
    check(name,String)

    var i = new RegExp(name,"i");

    return Restaurants.find({"title": i});


})

Meteor.publish('dishesxrestaurant',function (name) {
    check(name,String)

    let id =  Restaurants.findOne({slug:name})._id;
    return Dishes.find({restaurant_id:id});
})
