Template.adminListCollaborators.helpers({
    collaborators(){
        return Meteor.users.find({'profile.type':'collaborator'});
    }
})

Template.adminListCollaborators.events({
    'click .agregar-colaborador'(event,template){
        Modal.show('createCollaborator')
    }
})
