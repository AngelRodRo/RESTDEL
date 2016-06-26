Template.result.events({
    'click .restaurant-order'(event,template){
        let id = $(event.target).data('id')
        FlowRouter.go('/resultados/'+id);
    }
})


Template.result.helpers({
    id(){
        return this._id._str? this._id._str:this._id;
    }
})
