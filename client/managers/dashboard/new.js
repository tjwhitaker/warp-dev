Template.new.events({
    'click #new-website': function() {
        var url = $('#url').val();
        Meteor.call('newWebsite', Meteor.userId(), url); 
    }
});
