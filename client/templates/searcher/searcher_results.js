Template.searcherResults.onCreated(function () {
    let self = this;

    Session.set("type-query","");
    Session.set("query","");

    self.autorun(function () {
        self.subscribe('results',Session.get("type-query"),Session.get("query"));
    })
})

Template.searcherResults.events({
    'keyup .nombre'(event,template){
        Session.set("query",template.find("[name='name']").value);
    }
})
