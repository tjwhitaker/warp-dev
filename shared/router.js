FlowRouter.route('/', {
    name: 'home.index',
    action: function() {
        BlazeLayout.render('index');
    }
});

FlowRouter.route('/login', {
    name: 'home.login',
    action: function() {
        BlazeLayout.render('login');
    }
});

FlowRouter.route('/register', {
    name: 'home.register',
    action: function() {
        BlazeLayout.render('register');
    }
});

FlowRouter.route('/analytics/overview', {
    name: 'analytics.overview',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'analytics-menu',
            main: 'overview'
        });
    }
});

FlowRouter.route('/analytics/schedule', {
    name: 'analytics.schedule',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'analytics-menu',
            main: 'schedule'
        });
    }
});

FlowRouter.route('/analytics/metrics', {
    name: 'analytics.metrics',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'analytics-menu',
            main: 'metrics'
        });
    }

});

FlowRouter.route('/analytics/statistics', {
    name: 'analytics.statistics',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'analytics-menu',
            main: 'statistics'
        });
    }

});
