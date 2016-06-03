Meteor.publish('results',function (type,name) {

    check(type,String);
    check(name,String)

    let Collection = type=="Restaurante"? Restaurants : Dishes;

    return Collection.find({"name": /.*m.*/});


})
