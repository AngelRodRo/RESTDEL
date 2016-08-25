
formatDate = function (date) {
    var day = date.getDay();
    var month = (String(date.getMonth()+1).length>1)? "0"+(date.getMonth()+1) : date.getMonth() ;
    var year = date.getFullYear();

    return day + month + year;
}

Meteor.methods({
    'addToOrder'(data){
        check(data,Object);
        console.log(data);
        if(this.userId){
            if(Meteor.user().profile.type!="Restaurant"){
                console.log(data.dishId);
                let _dish = Dishes.findOne({_id:data.dishId});
                console.log(_dish);
                let dish = {
                    id: data.dishId,
                    name: _dish.name,
                    quantity: data.quantity,
                    price: _dish.price
                }

                let restaurant = {
                    id: data.restaurantId,
                    name: Restaurants.findOne({_id: data.restaurantId}).title
                }

                let user = {}

                user.name = Meteor.users.findOne({_id:this.userId}).profile.name;
                user.id = this.userId;
                let code = user.name.substring(0,3) +"-"+ formatDate(new Date()) + "-" + data.dishId.substring(0,4);
                // clear();
                let order = {
                    code:code,
                    isCompleted:false,
                    isAble:true,
                    dishes:[dish],
                    restaurant: restaurant,
                    user: user,
                    userId:user.id
                }
                // console.log(order);
                let ordersQuantity = Orders.find({'user.id':this.userId,isAble:true}).count();
                if(ordersQuantity==1){
                    console.log(dish);
                    console.log('Entro aqui');
                    return Orders.update({'user.id':this.userId,isAble:true},{
                        "$push": {
                            "dishes": dish
                        }
                    });
                }
                return Orders.insert(order)
            }

        }

        return "";

    },
    'detailsOrder'(data){
        check(data,Object);
        console.log(data);
        Orders.update({'user.id':this.userId,isAble:true},{
            $set:{
                'user.address':data.address,
                'user.phone':data.phone,
                'user.position':data.position,
                'isRequested':true
            }
        })
    },
    'orderDelete'(){
        Orders.remove({'user.id':Meteor.userId()})
    },
    'updateLocationOrder'(id,latitude,longitude){
        check(id,String)
        check(latitude,Number)
        check(longitude,Number)
        console.log('Entro aqui');
        Orders.update({_id:id},{
            $set:{
                latitude:latitude,
                longitude:longitude
            }
        });
    }
})
