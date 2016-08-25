Template.orderDashboard.events({
    'click .show-details'(event,template){
        Modal.show('detailsOrderDashboard',this);
    },
    'click .asign-collaborator'(event,template){
        Modal.show('asignCollaborator',this);
    }
})

Template.orderDashboard.helpers({
    state(){
        return this.mandatedId ? true:false;
    },
    asignado(){
        return Orders.findOne({_id:this._id}).mandatedId? true:false;
    },
    collaborator(){
        return Meteor.users.findOne({_id:Orders.findOne({_id:this._id}).mandatedId}).profile.name;
    }
})
