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
    }
})
