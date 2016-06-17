Template.listOrders.onRendered(function () {
    let self = this;
    self.autorun(function () {
        self.subscribe('orderxrestaurant','');
    });
})
