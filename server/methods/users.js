Meteor.methods({
    'createUsers'(data){
        // check(data,{
        //     email:String,
        //     password:String,
        //     profile:Object
        // });

        Accounts.createUser(data);
    }
})
