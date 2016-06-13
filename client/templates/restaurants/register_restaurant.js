Template.registerRestaurant.events({
    'submit form'(event,template){
        event.preventDefault();
        var owner = {
            email: template.find("[name='email']").value,
            password: template.find("[name='password']").value,
            profile:{
                dni: template.find("[name='idcard']").value,
                name: template.find("[name='name']").value,
                lastname: template.find("[name='lastname']").value,
            }
        };

        var restaurant = {
            title: template.find("[name='title']").value,
            phone: template.find("[name='phone']").value,
            address:template.find("[name='address']").value,
            celphone: template.find("[name='celphone']").value
        }

        Accounts.createUser(owner,function (err) {
            if(err) return toastr.error('Hubo un error al registrar intentelo nuevamente')
            restaurant.owner_id = Meteor.userId();

            Meteor.call('createRestaurant',restaurant,function (err) {
                if(err) return toastr.error('Hubo un error al registrar intentelo nuevamente')
                return FlowRouter.go('/restaurantes')
            })
        })

    }

})
