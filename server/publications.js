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
