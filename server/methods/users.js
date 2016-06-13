Meteor.methods({
    'createUsers'(data){
        // check(data,{
        //     email:String,
        //     password:String,
        //     profile:Object
        // });

        data.profile.type="User";

        Accounts.createUser(data);
    }
})
