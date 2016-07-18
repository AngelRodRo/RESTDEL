Template.adminListCollaborators.helpers({
    collaborators(){
        return Meteor.users.find({'profile.type':'Collaborator'});
    },
    email(){
        return this.emails[0].address
    }
})

Template.adminListCollaborators.events({
    'click .agregar-colaborador'(event,template){
        Modal.show('createCollaborator')
    }
})
