Template.navigation.events({
    'click .login-btn'(){
        Modal.show('loginClient');
    },
    'click .logout-btn'(){
        Meteor.logout();
    }
})

Template.navigation.onCreated(function () {

    let self = this;
    self.autorun(function () {
        Meteor.subscribe('orders',Meteor.userId())
    })
})

Template.navigation.helpers({
    isLogged(){
        let state = Meteor.userId()!==null? true:false;
        return state;
    },
    name(){
        return Meteor.user().profile.name + " " + Meteor.user().profile.lastname
    },
    nroOrders(){
        return Orders.find({isCompleted:false}).fetch()[0].dishes.length;
    }
})
