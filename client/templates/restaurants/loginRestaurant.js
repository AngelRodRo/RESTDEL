Template.loginRestaurants.events({
    'submit form'(event,template){
        event.preventDefault();
        let user = template.find("[name='email']").value;
        let password = template.find("[name='pass']").value;

        Meteor.loginWithPassword(user,password,function (err) {
            if(err) return toastr.error('Hubo un error al momento de iniciar sesion, intentelo nuevamente');
            FlowRouter.go('/simpleadmin')
        })

    }
})
