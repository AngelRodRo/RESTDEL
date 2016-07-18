Template.listOrdersDashboard.helpers({
    orders(){
        return Orders.find({'restaurant.id':Meteor.user().profile.restaurantId,'isRequested':true});
    },
    total(){
        let total = 0;

        Orders.find({'restaurant.id':Meteor.user().profile.restaurantId}).dishes.forEach(function (dish) {
            total+= dish.quantity * dish.price;
        })

        return total;
    }
})

Template.listOrdersDashboard.onCreated(function () {

})
