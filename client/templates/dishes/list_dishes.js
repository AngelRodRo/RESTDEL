Template.listDishes.onCreated(function () {
    let self = this;
    self.autorun(function () {
        self.subscribe('dishesxrestaurant',FlowRouter.getParams('restaurant'))
    })
})

Template.listDishes.helpers({
    dishes(){
        return Dishes.find();
    }
})
