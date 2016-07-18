Template.detailsOrderDashboard.helpers({
    dishes(){
        return Orders.findOne({_id:this._id}).dishes;
    },
    total(){
        let total = 0;
        debugger;
        Orders.findOne({_id:this._id}).dishes.forEach(function (dish) {
            total+= dish.quantity * dish.price;
        })

        return total;
    },
    subtotal(){
        return this.price * this.quantity;
    }
})
