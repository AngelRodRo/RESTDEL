Template.createCollaborator.events({
    'click .create-collaborator'(event,template){
        event.preventDefault();
        let profile = {
            name: template.find("[name='name']").value,
            lastname: template.find("[name='lastname']").value,
            phone: template.find("[name='phone']").value,
            address: template.find("[name='address']").value,
            bufeteId: Meteor.user().profile.bufeteId,
            type: 'collaborator'
        }
        let data = {
            email: template.find("[name='email']").value,
            password: template.find("[name='password']").value,
            profile: profile
        }


        Meteor.users.insert(data)
    }
})
