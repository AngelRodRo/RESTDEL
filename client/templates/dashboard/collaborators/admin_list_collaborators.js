Template.adminListCollaborators.helpers({
    collaborators(){
        return Meteor.users.find({'profile.type':'Collaborator','profile.restaurantId':Meteor.user().profile.restaurantId});
    },
    email(){
        debugger;
        return this.emails[0].address
    }
})

Template.adminListCollaborators.events({
    'click .agregar-colaborador'(event,template){
        Modal.show('createCollaborator')
    },
    'click .btn-delete'(event,template){

        let userId = this._id;

        swal({
          title: '¿Esta seguro que quiere eliminar a este colaborador?',
          text: 'Ya no podra realizar cambios posteriores',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#dd6b55',
          cancelButtonColor: '#d44',
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar',
          closeOnConfirm: false
        }, function() {

            Meteor.call('deleteUsers',userId,function (err) {
                if(err) return toastr.error('Hubo un error al momento cancelar la orden')
                swal(
                  'Se elimino al colaborador correctamente',
                  '',
                  'success'
                );

            })

        });
    }
})
