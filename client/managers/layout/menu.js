Template.homeMenu.helpers({
    websites: function() {
        return Websites.find({});
    }
});

Template.analyticsMenu.helpers({
    website: function() {
        return Websites.findOne(FlowRouter.getParam('id'));
    }
});
