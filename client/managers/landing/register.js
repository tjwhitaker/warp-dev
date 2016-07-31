Template.register.events({   
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
