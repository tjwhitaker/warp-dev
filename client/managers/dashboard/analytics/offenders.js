Template.offenders.helpers({
    'hasData': function() {
        var websiteId = FlowRouter.getParam('id');
        var website = Websites.findOne(websiteId);
        return websiteId && website && (website.data.length > 0) 
    },
	'offenders': function() {
	    var websiteId = FlowRouter.getParam('id');
        console.log(Websites.findOne(websiteId).data);
        return;
    }
});
