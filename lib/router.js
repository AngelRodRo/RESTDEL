FlowRouter.route('/',{
    action(params,queryParams){
        BlazeLayout.render('mainLayout',{content:'searcher',nav:'navigation'});
    }
})

FlowRouter.route('/registro',{
    action(params,queryParams){
        BlazeLayout.render('registerClient');
    }
})

var restaurants = FlowRouter.group({
    prefix : '/restaurantes',
    name : 'restaurants'
})

restaurants.route('/',{
    action(params,queryParams){
        BlazeLayout.render('mainLayout',{content:'loginRestaurants',nav:''})
    }
})
