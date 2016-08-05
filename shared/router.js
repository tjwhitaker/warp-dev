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

exposed.route('/denied', {
    name: 'landing.denied',
    action: function() {
        BlazeLayout.render('denied');
    }
});

exposed.route('/404', {
    name: 'landing.404',
    action: function() {
        BlazeLayout.render('404');
    }
});

FlowRouter.route('/logout', {
  name: 'logout',
  action() {
    Accounts.logout();
    FlowRouter.go('/');
  }
});


/*******************
 * Classified Routes
 *******************/

var classified = FlowRouter.group({
    name: 'classified',
    triggersEnter: [function(context, redirect) {
        if (!Meteor.loggingIn() && !Meteor.userId()) {
            redirect('/denied');
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

classified.route('/new', {
    name: 'dashboard.new',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'homeMenu',
            main: 'new'
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

classified.route('/:id/flow', {
    name: 'dashboard.analytics.flow',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'analyticsMenu',
            main: 'flow'
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

classified.route('/:id/offenders', {
    name: 'dashboard.analytics.offenders',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'analyticsMenu',
            main: 'offenders'
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

/*******************
 * Admin Routes
 *******************/

var admin = FlowRouter.group({
    triggersEnter: [function(context, redirect) {
        if (!Roles.userIsInRole(Meteor.user(), ['admin'])) {
            redirect('/denied');
        }
    }]
});

admin.route('/admin', {
    name: 'admin',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'adminMenu',
            main: 'admin'
        });
    }
});

admin.route('/admin/billing', {
    name: 'admin.billing',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'adminMenu',
            main: 'billing'
        });
    }
});

admin.route('/admin/users', {
    name: 'admin.users',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'adminMenu',
            main: 'users'
        });
    }
});

admin.route('/admin/websites', {
    name: 'admin.websites',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'adminMenu',
            main: 'websites'
        });
    }
});

admin.route('/admin/jobs', {
    name: 'admin.jobs',
    action: function() {
        BlazeLayout.render('layout', {
            menu: 'adminMenu',
            main: 'jobs'
        });
    }
});
