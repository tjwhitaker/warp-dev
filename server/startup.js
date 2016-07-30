Meteor.startup(function() {
    Meteor.users.remove({});
    Jobs.remove({});
    Websites.remove({});

    Websites.insert({url: 'http://warpdrive.io'});
    Websites.insert({url: 'http://tim-whitaker.com'});
});
