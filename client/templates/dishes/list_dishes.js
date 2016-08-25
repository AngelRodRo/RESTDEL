Template.listDishes.onCreated(function () {
    let self = this;
    self.autorun(function () {
        self.subscribe('dishesxrestaurant',FlowRouter.getParam('restaurantId'))
    });
})

Template.listDishes.helpers({
    dishes(){
        return Dishes.find({restaurantId:FlowRouter.getParam('restaurantId')});
    }
})
