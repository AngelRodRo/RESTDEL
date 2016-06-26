

Template.waiting.onCreated(function () {
    debugger;
    Orders.find({isCompleted:false}).observe({
        changed:function (doc,oldDocument) {
            if(doc.isCompleted) {
                Modal.hide('waiting')
                FlowRouter.go('/misordenes/esperando')
            }
        }
    })
})

Template.waiting.onRendered(function () {

})
