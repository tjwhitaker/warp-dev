Meteor.publish('userData', function () {
    if (this.userId) {
        return Meteor.users.find(
            {_id: this.userId}, 
            {fields: {'websites': 1}}
        );
    } 
    else {
        this.ready();
    }
});

Meteor.publish('jobs', function() {
    return Jobs.find();
});

Meteor.publish('websites', function() {
    return Websites.find();
});
