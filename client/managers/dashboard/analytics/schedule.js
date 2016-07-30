Template.schedule.events({
    'click #schedule-job-button': function() {
        var userId = Meteor.userId();
        var websiteId = FlowRouter.getParam('id');
        var settings = {
            repeats: 1,
            delay: 10
        };

        Meteor.call('scheduleJob', userId, websiteId, settings);
    }
});
