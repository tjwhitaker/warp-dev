/****************
 * General Routes
 ****************/

FlowRouter.route('/', {
    name: 'landing.index',
    action: function() {
        BlazeLayout.render('index');
    }
});

FlowRouter.route('/login', {
    name: 'landing.login',
    action: function() {
        BlazeLayout.render('login');
    }
});

FlowRouter.route('/register', {
    name: 'landing.register',
    action: function() {
        BlazeLayout.render('register');
    }
});

/******************
 * Analytics Routes
 ******************/

FlowRouter.route('/home', {
    name: 'dashboard.home',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'user-menu',
            main: 'home'
        });
    }
});

FlowRouter.route('/:id/overview', {
    name: 'dashboard.analytics.overview',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'analytics-menu',
            main: 'overview'
        });
    }
});

FlowRouter.route('/:id/schedule', {
    name: 'dashboard.analytics.schedule',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'analytics-menu',
            main: 'schedule'
        });
    }
});

FlowRouter.route('/:id/metrics', {
    name: 'dashboard.analytics.metrics',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'analytics-menu',
            main: 'metrics'
        });
    }

});

FlowRouter.route('/:id/statistics', {
    name: 'dashboard.analytics.statistics',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'analytics-menu',
            main: 'statistics'
        });
    }

});

/*****************
 * Settings Routes
 *****************/


FlowRouter.route('/settings', {
    name: 'settings',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'settings-menu',
            main: 'settings'
        });
    }
});
