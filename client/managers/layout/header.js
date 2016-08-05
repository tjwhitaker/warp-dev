Template.header.helpers({
    'isAdmin': function() {
        return Roles.userIsInRole(Meteor.user(), ['admin']);
    }
})
