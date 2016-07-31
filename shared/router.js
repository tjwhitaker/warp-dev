/****************
 * Exposed Routes
 ****************/

var exposed = FlowRouter.group({});

exposed.route('/', {
    name: 'landing.index',
    action: function() {
        BlazeLayout.render('index');
    }
});

exposed.route('/login', {
    name: 'landing.login',
    action: function() {
        BlazeLayout.render('login');
    }
});

exposed.route('/logout', {
    name:'landing.logout',
    action: function() {
        Meteor.logout();
        FlowRouter.redirect('/');
    }
});

exposed.route('/register', {
    name: 'landing.register',
    action: function() {
        BlazeLayout.render('register');
    }
});

/*******************
 * Classified Routes
 *******************/

var classified = FlowRouter.group({
    name: 'classified',
    triggersEnter: [function(context, redirect) {
        if (!Meteor.loggingIn() && !Meteor.userId()) {
            redirect('/login');
        }

    }]
});

classified.route('/home', {
    name: 'dashboard.home',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'homeMenu',
            main: 'home'
        });
    }
});

classified.route('/:id/overview', {
    name: 'dashboard.analytics.overview',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'analyticsMenu',
            main: 'overview'
        });
    }
});

classified.route('/:id/schedule', {
    name: 'dashboard.analytics.schedule',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'analyticsMenu',
            main: 'schedule'
        });
    }
});

classified.route('/:id/metrics', {
    name: 'dashboard.analytics.metrics',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'analyticsMenu',
            main: 'metrics'
        });
    }
});

classified.route('/:id/resources', {
    name: 'dashboard.analytics.resources',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'analyticsMenu',
            main: 'resources'
        });
    }
});

classified.route('/:id/statistics', {
    name: 'dashboard.analytics.statistics',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'analyticsMenu',
            main: 'statistics'
        });
    }
});

classified.route('/settings', {
    name: 'settings',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'settingsMenu',
            main: 'settings'
        });
    }
});

classified.route('/settings/jobs', {
    name: 'settings.jobs',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'settingsMenu',
            main: 'jobs'
        });
    }
});

/*******************
 * Admin Routes
 *******************/

var admin = FlowRouter.group({});
