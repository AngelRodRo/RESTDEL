Template.listOrdersClient.onCreated(function () {
    let self = this;
    self.autorun(function () {
        self.subscribe('orders',Meteor.userId())
    })
})

Template.listOrdersClient.helpers({
    orderDishes(){
        return Orders.find({isCompleted:false}).fetch()[0].dishes;
    },
    subtotal(){
        return this.price * this.quantity;
    }
})
