var restaurants = FlowRouter.group({
    prefix : '/restaurantes',
    name : 'restaurants'
})

restaurants.route('/',{
    action(params,queryParams){
        BlazeLayout.render('restaurantLayout',{content:'loginRestaurants',nav:''})
    }
})


restaurants.route('/registro',{
    action(params,queryParams){
        BlazeLayout.render('restaurantLayout',{content:'registerRestaurant',nav:''})
    }
})
