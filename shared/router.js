FlowRouter.route('/', {
    name: 'home.index',
    action: function() {
        BlazeLayout.render('index');
    }
});
