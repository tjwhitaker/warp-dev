Accounts.onCreateUser(function(options, user) {
    user.url = 'http://warpdrive.io';
    user.metrics = [];

    if (options.profile) {
        user.profile = options.profile;
    }

    return user;
});
