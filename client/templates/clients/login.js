Template.loginClient.events({
    'submit form'(events,template){
        events.preventDefault();
        let email = template.find("[name='email']").value,
            password = template.find("[name='password']").value;

        Meteor.loginWithPassword(email,password,function (err) {
            if(err) return console.log(err)
            $("#loginModal").modal('hide')
            
        });
    }
})
