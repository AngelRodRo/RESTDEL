Template.asignCollaborator.helpers({
    collaborators(){
        return Meteor.users.find({'profile.restaurantId':Meteor.user().profile.restaurantId});
    }
})

Template.asignCollaborator.events({
    'click .asign'(event,template){
        Orders.update({_id:this._id},{
            $set:{
                isAble:false,
                mandatedId: template.find("[name='collaborator']").value
            }
        })

        Modal.hide('asignCollaborator');
    }
})
