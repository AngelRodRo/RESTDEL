Template.listOrdersClient.onCreated(function () {
    let self = this;
    self.autorun(function () {
        self.subscribe('orders',Meteor.userId())
    })
})

Template.listOrdersClient.helpers({
    orderDishes(){
        debugger;
        return Orders.find({isCompleted:false}).fetch()[0].dishes;
    },
    subtotal(){
        return this.price * this.quantity;
    },
    total(){
        let dishes = Orders.find({isCompleted:false}).fetch()[0].dishes
        let sum = 0;
        dishes.forEach(function (dish) {
            sum=+dish.quantity*dish.price
        })
        return sum;

    }
})


Template.listOrdersClient.events({
    'click .make-order'(event,template){
        Modal.show('orderDetails')
    }
})
