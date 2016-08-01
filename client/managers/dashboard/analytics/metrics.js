Template.metrics.helpers({
    'hasData': function() {
        var websiteId = FlowRouter.getParam('id');
        var website = Websites.findOne(websiteId);
        return websiteId && website && (website.data.length > 0) 
    }
});

Template.timingTable.helpers({
	'tests': function() {
	    var websiteId = FlowRouter.getParam('id');
        return Websites.findOne(websiteId).data;
    }
});
Template.weightTable.helpers({
	'tests': function() {
		var websiteId = FlowRouter.getParam('id');
        return Websites.findOne(websiteId).data;
	}
});
