Meteor.publish('results',function (type,name) {

    check(type,String);
    check(name,String)

    var i = new RegExp(name,"i");

    return Restaurants.find({"title": i});


})

Meteor.publish('dishesxrestaurant',function (id) {
    check(id,String)

    return Dishes.find({restaurantId:id});
})
