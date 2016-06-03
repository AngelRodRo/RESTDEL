Template.searcher.events({
    'submit form'(event,template){
        event.preventDefault();
        let type = template.find("[name='type']").value,
            name = template.find("[name='name']").value;
        FlowRouter.go('/resultados?type='+type+'&'+'name='+name);
    }
})
