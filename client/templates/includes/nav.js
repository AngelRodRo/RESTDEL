Template.navigation.events({
    'click .login-btn'(){
        Modal.show('loginClient');
    },
    'click .register-btn'(){
        Modal.show('registerClient');
    },
    'click .logout-btn'(){
        Meteor.logout();
    }
})

Template.navigation.onCreated(function () {

    let self = this;
    self.autorun(function () {
        self.subscribe('orders',Meteor.userId())
    })
})

Template.navigation.helpers({
    isLogged(){
        if(Meteor.userId())
            if(Meteor.user().profile.type!="Restaurant")
                return true;
        return false;
    },
    name(){
        return Meteor.user().profile.name + " " + Meteor.user().profile.lastname
    },
    nroOrders(){
        return Orders.find({isCompleted:false}).fetch()[0].dishes.length;
    }
})
