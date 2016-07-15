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

FlowRouter.route('/miorden',{
    action(params,queryParams){
        BlazeLayout.render('mainLayout',{content:'listOrdersClient',nav:'navigation'});
    }
})

FlowRouter.route('/miorden/esperando',{
    action(params,queryParams){
        BlazeLayout.render('mainLayout',{content:'orderMap',nav:'navigation'})
    }
})

FlowRouter.route('/superadmin',{
    action(params,queryParams){
        BlazeLayout.render('dashboard-general');
    }
})

FlowRouter.route('/simpleadmin',{
    action(params,queryParams){
        BlazeLayout.render('dashboard');
    }
})
