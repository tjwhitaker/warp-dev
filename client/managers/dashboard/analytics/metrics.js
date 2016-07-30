Template.timingTable.helpers({
	'metrics': function() {
	    var websiteId = FlowRouter.getParam('id');
        return Websites.findOne(websiteId).metrics;
    }
});
Template.weightTable.helpers({
	'metrics': function() {
		var websiteId = FlowRouter.getParam('id');
        return Websites.findOne(websiteId).metrics;
	}
});
