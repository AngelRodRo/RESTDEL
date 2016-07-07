Template.dashboard.helpers({
    currentUser:function () {
        return Meteor.user().profile.name + " " + Meteor.user().profile.lastname;
    },
    restaurant(){
        return Restaurants.findOne({_id:Meteor.user().profile.restaurantId}).title;
    }
})

Template.dashboard.onCreated(function () {
    let self = this;
    self.autorun(function () {
        self.subscribe('restaurants')
    })
})
