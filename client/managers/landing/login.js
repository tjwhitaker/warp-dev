Template.login.events({
    'click #login-button': function() {
        var email = $('#email-field').val();
        var password = $('#password-field').val();

        Meteor.loginWithPassword(email, password, function(error) {
            if (error) console.log(error.message);
        });
    }
});
