

Template.waiting.onCreated(function () {
    debugger;
    Orders.find({isCompleted:false}).observe({
        changed:function (doc,oldDocument) {
            debugger;
            if(!doc.isAble) {
                Modal.hide('waiting')
                FlowRouter.go('/miorden/esperando')
            }
        }
    })
})

Template.waiting.onRendered(function () {

})
