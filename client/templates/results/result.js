Template.result.events({
    'click .restaurant-order'(event,template){
        let id = $(event.target).data('id')
        Flow.go('/resultados/'+id);
    }
})
