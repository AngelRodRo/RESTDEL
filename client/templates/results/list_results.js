Template.listResults.onCreated(function () {
    let self = this;
    let type = FlowRouter.getQueryParam('type'),
        name = FlowRouter.getQueryParam('name');

    self.autorun(function () {
        self.suscribe('results',type,name);
    })
})

Template.listResults.helpers({

})
