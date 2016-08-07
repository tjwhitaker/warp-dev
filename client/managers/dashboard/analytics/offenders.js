Template.offenders.helpers({
    'hasData': function() {
        var websiteId = FlowRouter.getParam('id');
        var website = Websites.findOne(websiteId);
        return websiteId && website && (website.data.length > 0) 
    },
	'offenders': function() {
	    var websiteId = FlowRouter.getParam('id');
        var data = Websites.findOne(websiteId).data.slice(-1)[0].offenders;
        var offenders = [];

        for (var key in data) {
            if (key != 'cssCount'   && 
                key != 'jsCount'    && 
                key != 'imageCount' &&
                key != 'webfontCount')
                
                offenders.push({key: key, data:data[key]});
        }

        console.log(offenders);


        return offenders;
    }
});
