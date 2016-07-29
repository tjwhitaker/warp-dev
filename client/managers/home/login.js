Template.login.events({
    'click #login-button': function() {
        var email = $('#email-field').val();
        var password = $('#password-field').val();

        Meteor.loginWithPassword(email, password, function(error) {
            if (error) console.log(error.message);
        });
    },

    'click #register-button': function() {
        var email = $('#email-field').val();
        var password = $('#password-field').val();
        var key = $('#key-field').val();

        Accounts.createUser(
            {email: email, password: password}, 
            function(error) {
                if (error) console.log(error.message);
            }
        );
    }
});
