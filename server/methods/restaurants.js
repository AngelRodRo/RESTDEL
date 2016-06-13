Meteor.methods({
    'createRestaurant'(data){

        // check(data,{
        //     title:String,
        //     address:String,
        //     phone:String,
        //     celphone:String,
        // })

        Restaurants.insert(data);
    },
    'searchRestaurant'(){

    }
})
