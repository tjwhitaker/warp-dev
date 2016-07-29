Accounts.onCreateUser(function(options, user) {
    user.websites = [
        {
            url: 'http://warpdrive.io',
            id: Random.id(),
            metrics: []
        },
        {
            url: 'http://tim-whitaker.com',
            id: Random.id(),
            metrics: []
        }
    ];

    if (options.profile) {
        user.profile = options.profile;
    }

    return user;
});
