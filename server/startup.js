Meteor.startup(function() {
    Jobs.remove({});
    Websites.remove({});
    Meteor.users.remove({});

    var demo = Accounts.createUser({
        email: 'demo@warpdrive.io',
        password: 'demo'
    });

    Roles.addUsersToRoles(demo, ['admin']);

    Websites.insert({userId: demo, url: 'http://warpdrive.io', data: []});
});
