Meteor.methods({
    'createClient'(data){

        check(data,{
            name: String,
            lastname: String,
            phone:String,
            address:String
        });

        Account.createUser(data);
    }
})
