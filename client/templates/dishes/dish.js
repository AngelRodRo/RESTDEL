Template.dish.helpers({
    id(){
        return this._id._str? this._id._str:this._id;
    }
})

Template.dish.events({
    'click .make-order'(events,template){
        debugger;
        var data = {}
        data.restaurantId = FlowRouter.getParam('restaurantId');
        data.dishId = $(events.target).data('id');
        data.quantity = template.find("[name='quantity']").value;

        if(data.quantity!="")
            return Meteor.call('addToOrder',data,function (err,success) {
                debugger;
                console.log(success);
                if(err) return toastr.error('Hubo un error al realizar el pedido, intentelo de nuevo');
                if(success=="") return toastr.warning('Inicie sesion antes de continuar');
                toastr.success('Se añadio exitosamente a su orden')
            })

        toastr.warning('Por favor complete la cantidad de la orden  ')
        // data.quantity = template.
    }
})
