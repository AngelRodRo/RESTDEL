var admin = FlowRouter.group({
    prefix : '/simpleadmin',
    name : 'admin',
    triggersEnter: [function(context, redirect) {
        // if(Meteor.user())
        //     if(Meteor.user().profile.type=="Restaurant") return;
        // toastr.warning('Inicie sesion antes de continuar')
        // redirect('/restaurantes')
    }]
})

admin.route('/',{
    action(params,queryParams){
        BlazeLayout.render('dashboard',{content:'mainComponent'});
    }
})

admin.route('/comidas',{
    action(params,queryParams){
        BlazeLayout.render('dashboard',{content:'adminListDishes'})
    }
})

admin.route('/configuracion',{
    action(params,queryParams){
        BlazeLayout.render('configuracion_restaurante');
    }
})
