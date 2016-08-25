Meteor.publish('orders',function (userId) {
    return Orders.find({'user.id':userId});
})

Meteor.publish('mmyorderactive',function (userId) {
    return Orders.find({'user.id':userId,isCompleted:false});
})
