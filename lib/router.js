FlowRouter.route('/',{
    action(params,queryParams){
        BlazeLayout.render('mainLayout',{content:'searcher',nav:'navigation'});
    }
})

FlowRouter.route('/resultados',{
    name:'results',
    action(params,queryParams){
        BlazeLayout.render('mainLayout',{searcher:'searcherResults',content:'listResults',nav:'navigation'});
    }
})

FlowRouter.route('/resultados/:restaurantId',{
    name:'results.restaurant',
    action(params,queryParams){
        BlazeLayout.render('mainLayout',{content:'listDishes',nav:'navigation'})
    }
})

FlowRouter.route('/registro',{
    action(params,queryParams){
        BlazeLayout.render('registerClient');
    }
})

FlowRouter.route('/misordenes',{
    action(params,queryParams){
        BlazeLayout.render('orderClient');
    }
})

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
