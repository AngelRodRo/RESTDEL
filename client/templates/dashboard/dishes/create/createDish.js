Template.createDish.events({
    'click .create-dish'(event,template){
        debugger;
        let data = {
            name: template.find("[name='name']").value,
            type: template.find("[name='type']").value,
            price: template.find("[name='price']").value,
            restaurantId: Meteor.user().profile.restaurantId
        }

        Dishes.insert(data,function (err) {
            if(err) return toastr.error('No se pudo registrar correctamente el plato de comida');
            toastr.success('Se registro correctamente el plato de comida')
            Modal.hide('createDish')
        })
    }
})
