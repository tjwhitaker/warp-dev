Meteor.startup(function() {
    Meteor.users.remove({});
    Jobs.remove({});
    Websites.remove({});

    Websites.insert({url: 'http://warpdrive.io', metrics: []});
    Websites.insert({url: 'http://tim-whitaker.com', metrics: []});
});
