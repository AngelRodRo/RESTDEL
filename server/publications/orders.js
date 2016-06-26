Meteor.publish('orders',function (userId) {
    return Orders.find({'user.id':userId});
})
