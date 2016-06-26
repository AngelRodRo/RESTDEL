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
    }
})


Template.listOrdersClient.events({
    'click .make-order'(event,template){
        Modal.show('waiting')
    }
})
