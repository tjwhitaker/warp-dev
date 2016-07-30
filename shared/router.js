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
            menu: 'homeMenu',
            main: 'home'
        });
    }
});

FlowRouter.route('/:id/overview', {
    name: 'dashboard.analytics.overview',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'analyticsMenu',
            main: 'overview'
        });
    }
});

FlowRouter.route('/:id/schedule', {
    name: 'dashboard.analytics.schedule',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'analyticsMenu',
            main: 'schedule'
        });
    }
});

FlowRouter.route('/:id/metrics', {
    name: 'dashboard.analytics.metrics',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'analyticsMenu',
            main: 'metrics'
        });
    }
});

FlowRouter.route('/:id/resources', {
    name: 'dashboard.analytics.resources',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'analyticsMenu',
            main: 'resources'
        });
    }
});

FlowRouter.route('/:id/statistics', {
    name: 'dashboard.analytics.statistics',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'analyticsMenu',
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
            menu: 'settingsMenu',
            main: 'settings'
        });
    }
});

FlowRouter.route('/settings/jobs', {
    name: 'settings.jobs',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'settingsMenu',
            main: 'jobs'
        });
    }
});
