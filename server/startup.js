Meteor.startup(function() {
    Jobs.remove({});
    Websites.remove({});

    Websites.insert({url: 'http://warpdrive.io', data: []});
    Websites.insert({url: 'http://tim-whitaker.com', data: []});
});
