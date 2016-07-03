Template.adminListDishes.events({

    'click .agregar-plato'(event,template){
        Modal.show('createDish')
    }
})

Template.adminListDishes.helpers({
    dishes(){
        return Dishes.find({restaurantId:Meteor.user().profile.restaurantId});
    }
})

Template.adminListDishes.onCreated(function () {
    let self = this;
    self.autorun(function () {
        self.subscribe('dishes')
    })
})
