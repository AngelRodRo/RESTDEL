Template.registerClient.events({
    'submit form':function (event,template) {
        event.preventDefault();
        var data = {}

        var profile = {}
        profile.name = template.find("[name='name']").value;
        profile.lastname = template.find("[name='lastname']").value;
        profile.phone = template.find("[name='phone']").value;

        data.email = template.find("[name='email']").value;
        data.password = template.find("[name='password']").value;
        data.profile = profile;

        Accounts.createUser(data,function (err) {
            if(err) return toastr.error('No se pudo crear el usuario correctamente')
            toastr.success('Se creo su cuenta exitosamente');
            FlowRouter.go('/')
        });
    }
})
