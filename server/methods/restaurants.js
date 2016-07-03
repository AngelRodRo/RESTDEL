Meteor.methods({
    'createRestaurant'(data){

        // check(data,{
        //     title:String,
        //     address:String,
        //     phone:String,
        //     celphone:String,
        // })

        let id = Restaurants.insert(data);
        return {
            id:id
        }
    },
    'searchRestaurant'(){

    }
})
