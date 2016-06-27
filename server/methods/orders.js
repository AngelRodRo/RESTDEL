
formatDate = function (date) {
    var day = date.getDay();
    var month = (String(date.getMonth()+1).length>1)? "0"+(date.getMonth()+1) : date.getMonth() ;
    var year = date.getFullYear();

    return day + month + year;
}

Meteor.methods({
    'addToOrder'(data){
        check(data,Object);

        if(this.userId){
            let _dish = Dishes.find({_id:new Mongo.ObjectID(data.dishId)}).fetch()[0]
            let dish = {
                id: data.dishId,
                name: _dish.name,
                quantity: data.quantity,
                price: _dish.price
            }

            let restaurant = {
                id: data.restaurantId,
                name: Restaurants.find({_id: new Mongo.ObjectID(data.restaurantId)}).fetch()[0].title
            }

            let user = {}

            user.name = Meteor.users.find({_id:this.userId}).fetch()[0].profile.name;
            user.id = this.userId;
            let code = user.name.substring(0,3) +"-"+ formatDate(new Date()) + "-" + data.dishId.substring(0,4);
            // clear();
            let order = {
                code:code,
                isCompleted:false,
                isAble:true,
                dishes:[dish],
                restaurant: restaurant,
                user: user
            }
            // console.log(order);
            let ordersQuantity = Orders.find({'user.id':this.userId,isAble:true}).count();
            if(ordersQuantity==1)
                return Orders.update({'user.id':this.userId,isAble:true},{$set:{
                    code:code,
                    isCompleted:false,
                    isAble:true,
                    "$push": {
                        "dishes": dish
                    },
                    user:user
                }});
            Orders.insert(order)
        }

        return "";

    },
    'detailsOrder'(data){
        check(data,Object);

        Orders.update({'user.id':this.userId,isAble:true},{
            $set:{
                'user.address':data.address,
                'user.phone':data.phone,
                'user.position':data.position
            }
        })
    }
})
