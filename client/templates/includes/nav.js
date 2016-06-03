Template.navigation.events({
    'click .login-btn'(){
        Modal.show('loginClient');
    },
    'click .logout-btn'(){
        Meteor.logout();
    }
})

Template.navigation.helpers({
    isLogged(){
        let state = Meteor.userId()!==null? true:false;
        return state;
    },
    name(){
        return Meteor.user().profile.name + " " + Meteor.user().profile.lastname
     }
})
